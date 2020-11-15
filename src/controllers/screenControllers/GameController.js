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
    this.spaceShip = new SpaceshipModel(stage);
    this.addChild(this.sky, this.mountains, this.ground, this.spaceShip);
    this.interval = setInterval(() => {
      const newEnemy = new EnemyModel();
      this.enemies.push(newEnemy);
      this.addChild(newEnemy);
    }, 2000);
  }

  gameLoop() {
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
    if (this.nextScreen !== '') {
      this.destroyScreen();
    }
  }

  isCollided() {
    const isCollided = this.enemies.some((enemy) => this.hasHit(enemy, this.spaceShip));
    if (isCollided) {
      this.spaceShip.explode();
      this.gameOver();
    }
  }

  updateBullets() {
    for (let i = this.spaceShip.bullets.length - 1; i >= 0; i -= 1) {
      const bullet = this.spaceShip.bullets[i];
      for (let j = this.enemies.length - 1; j >= 0; j -= 1) {
        const enemy = this.enemies[j];
        if (this.hasHit(bullet, enemy)) {
          this.removeEnemy(enemy, i);
          this.removeBullet(bullet, i);
          break;
        }
      }
    }
    this.spaceShip.bullets.forEach((bullet, i) => {
      if (bullet.x > CANVAS_WIDTH) {
        this.removeBullet(bullet, i);
      } else {
        // eslint-disable-next-line no-param-reassign
        bullet.x += bullet.speed;
      }
    });
  }

  removeEnemy(enemy, index) {
    enemy.explode();
    this.enemies.splice(index, 1);
  }

  removeBullet(bullet, index) {
    bullet.destroy();
    this.spaceShip.bullets.splice(index, 1);
  }

  // eslint-disable-next-line class-methods-use-this
  hasHit(bullet, enemy) {
    const bulletRect = bullet.getBounds();
    const enemeyRect = enemy.getBounds();
    return bulletRect.x + bulletRect.width > enemeyRect.x
      && bulletRect.x < enemeyRect.x + enemeyRect.width
      && bulletRect.y + bulletRect.height > enemeyRect.y
      && bulletRect.y < enemeyRect.y + enemeyRect.height;
  }

  moveEnemies() {
    for (let i = this.enemies.length - 1; i >= 0; i -= 1) {
      if (this.enemies[i].x < 0) {
        this.removeChild(this.enemies[i]);
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
