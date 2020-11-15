import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../../helpers/globals';
import BackgroundModel from '../../models/BackgroundModel';
import ScreenController from './ScreenController';
import sky from '../../assets/images/Aurora Borealis/Sky.png';
import mountains from '../../assets/images/Aurora Borealis/Mountains.png';
import ground from '../../assets/images/Aurora Borealis/Forest.png';
import SpaceshipModel from '../../models/SpaceshipModel';
import EnemyModel from '../../models/EnemyModel';

export default class GameController extends ScreenController {
  constructor({ stage, nextScreen }) {
    super({ stage });
    this.nextScreen = nextScreen;
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
    this.spaceShip = new SpaceshipModel(stage);
    this.enemy = new EnemyModel();
    this.addChild(this.sky, this.mountains, this.ground, this.spaceShip, this.enemy);
  }

  gameLoop() {
    this.sky.tilePosition.x -= 0.1;
    this.mountains.tilePosition.x -= 0.9;
    this.ground.tilePosition.x -= 0.8;
    this.spaceShip.move();
    if (this.spaceShip.bullets.length > 0) {
      this.updateBullets();
    }
  }

  updateBullets() {
    this.spaceShip.bullets.forEach((bullet, index) => {
      if (bullet.x > CANVAS_WIDTH) {
        this.removeBullet(bullet, index);
      } else {
        // eslint-disable-next-line no-param-reassign
        bullet.x += bullet.speed;
      }
    });
  }

  removeBullet(bullet, index) {
    bullet.destroy();
    this.spaceShip.bullets.splice(index, 1);
  }
}
