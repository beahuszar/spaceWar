import {
  CANVAS_HEIGHT, CANVAS_WIDTH, MENU_SCREEN, TEXT_STYLE,
} from '../../helpers/globals';
import BackgroundModel from '../../models/BackgroundModel';
import ScreenController from './ScreenController';
import sky from '../../assets/images/Aurora Borealis/Sky.png';
import mountains from '../../assets/images/Aurora Borealis/Mountains.png';
import ground from '../../assets/images/Aurora Borealis/Forest.png';
import SpaceshipModel from '../../models/SpaceshipModel';
import EnemyModel from '../../models/EnemyModel';
import TextModel from '../../models/TextModel';

export default class GameController extends ScreenController {
  constructor({ stage }) {
    super({ stage });
    this.nextScreen = '';
    this.sky = new BackgroundModel({
      texture: sky,
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
    });
    this.mountains = new BackgroundModel({
      texture: mountains,
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
    });
    this.ground = new BackgroundModel({
      texture: ground,
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
    });
    this.enemies = [];
    this.isOver = false;
    this.spaceShip = new SpaceshipModel(stage);
    this.addChild(this.sky, this.mountains, this.ground, this.spaceShip);
    this.interval = setInterval(() => {
      const newEnemy = new EnemyModel();
      this.enemies.push(newEnemy);
      this.addChild(newEnemy);
    }, 2000);
  }

  gameLoop() {
    if (!this.isOver) {
      this.isCollided();
      this.sky.tilePosition.x -= 0.1;
      this.mountains.tilePosition.x -= 0.9;
      this.ground.tilePosition.x -= 0.8;
      this.spaceShip.move();
      if (this.enemies.length > 0) {
        this.moveEnemies();
      }
      if (this.spaceShip.bullets.length > 0) {
        this.updateBullets();
      }
    }
    if (this.nextScreen !== '') {
      this.destroyScreen();
    }
  }

  isCollided() {
    const isCollided = this.enemies.some((enemy) => this.hasHit(enemy, this.spaceShip));
    if (isCollided) {
      this.isOver = true;
      this.spaceShip.explode();
      this.gameOver();
    }
  }

  updateBullets() {
    // Check if bullet is out of canvas, or should be moved
    for (let i = this.spaceShip.bullets.length - 1; i >= 0; i -= 1) {
      const bullet = this.spaceShip.bullets[i];
      if (bullet.x > CANVAS_WIDTH) {
        this.stage.removeChild(bullet);
        this.spaceShip.bullets.splice(i, 1);
      } else {
        bullet.x += bullet.speed;
      }

      // check if enemy is hit
      for (let j = this.enemies.length - 1; j >= 0; j -= 1) {
        const enemy = this.enemies[j];
        if (this.hasHit(enemy, bullet)) {
          enemy.explode();
          this.enemies.splice(j, 1);
          this.stage.removeChild(bullet);
          this.spaceShip.bullets.splice(i, 1);
        }
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  hasHit(x, y) {
    const rectA = x.getBounds();
    const rectB = y.getBounds();
    return rectA.x + rectA.width > rectB.x
      && rectA.x < rectB.x + rectB.width
      && rectA.y + rectA.height > rectB.y
      && rectA.y < rectB.y + rectB.height;
  }

  moveEnemies() {
    for (let i = this.enemies.length - 1; i >= 0; i -= 1) {
      if (this.enemies[i].x < 0) {
        this.removeChild(this.enemies[i]);
        this.enemies.splice(i, 1);
      } else {
        this.enemies[i].move();
      }
    }
  }

  gameOver() {
    const gameOver = new TextModel({
      text: 'GAME OVER',
      style: { ...TEXT_STYLE },
      positionX: CANVAS_WIDTH / 2,
      positionY: CANVAS_HEIGHT / 2,
    });
    this.addChild(gameOver);
    setTimeout(() => {
      this.nextScreen = MENU_SCREEN;
    }, 3000);
  }
}
