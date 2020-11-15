import AnimatedSpriteModel from './AnimatedSpriteModel';
import { CANVAS_HEIGHT } from '../helpers/globals';
import { createTextures } from '../helpers/spaceship.srv';
import KeyboardMovement from './KeyboardMovement';
import BulletModel from './BulletModel';

export default class SpaceshipModel extends AnimatedSpriteModel {
  constructor(stage) {
    const textures = createTextures();
    super({ textures: textures.flyEast });
    this.stage = stage;
    this.animationSpeed = 0.2;
    this.loop = true;
    this.x = 100;
    this.y = CANVAS_HEIGHT / 2;
    this.interactive = true;
    this.speed = 2;
    this.verticalSpeed = 0;
    this.horizontalSpeed = 0;
    this.bullets = [];
    this.setControls(textures);
    this.setAttack();
    this.play();
  }

  setAttack() {
    this.shoot = new KeyboardMovement(['Spacebar', ' ']);
    this.shoot.press = () => {
      const newBullet = new BulletModel();
      newBullet.x = this.x + 50;
      newBullet.y = this.y;
      this.bullets.push(newBullet);
      this.stage.addChild(newBullet);
    };
  }

  setControls(textures) {
    this.south = new KeyboardMovement(['ArrowDown', 's']);
    this.north = new KeyboardMovement(['ArrowUp', 'w']);
    this.east = new KeyboardMovement(['ArrowRight', 'd']);
    this.west = new KeyboardMovement(['ArrowLeft', 'a']);
    this.south.press = this.setVerticalPosition.bind(this, textures.flySouth, 2);
    this.south.release = this.stopMotion.bind(this, textures.flyEast);
    this.north.press = this.setVerticalPosition.bind(this, textures.flyNorth, -2);
    this.north.release = this.stopMotion.bind(this, textures.flyEast);
    this.east.press = this.setHorizontalPosition.bind(this, textures.flyEast, 2);
    this.east.release = this.stopMotion.bind(this, textures.flyEast);
    this.west.press = this.setHorizontalPosition.bind(this, textures.flyWest, -2);
    this.west.release = this.stopMotion.bind(this, textures.flyEast);
  }

  setVerticalPosition(texture, speed) {
    this.textures = texture;
    this.verticalSpeed = speed;
    this.play();
  }

  setHorizontalPosition(texture, speed) {
    this.textures = texture;
    this.horizontalSpeed = speed;
    this.play();
  }

  stopMotion(texture) {
    this.textures = texture;
    this.verticalSpeed = 0;
    this.horizontalSpeed = 0;
    this.play();
  }

  move() {
    this.y += this.verticalSpeed;
    this.x += this.horizontalSpeed;
  }
}
