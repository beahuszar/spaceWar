import sound from 'pixi-sound';
import AnimatedSpriteModel from './AnimatedSpriteModel';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../helpers/globals';
import { createTextures } from '../helpers/spaceship.srv';
import KeyboardMovement from './KeyboardMovement';
import BulletModel from './BulletModel';
import ExplosionModel from './ExplosionModel';

export default class SpaceshipModel extends AnimatedSpriteModel {
  constructor(stage) {
    const textures = createTextures();
    super({ textures: textures.flyEast });
    this.stage = stage;
    this.animationSpeed = 0.2;
    this.x = 100;
    this.y = CANVAS_HEIGHT / 2;
    this.speed = 5;
    this.verticalSpeed = 0;
    this.horizontalSpeed = 0;
    this.bullets = [];
    this.setControls(textures);
    this.setAttack();
    this.sound = sound.Sound.from('./assets/music/shoot.wav');
    this.explosion = sound.Sound.from('./assets/music/explosion.wav');
  }

  setAttack() {
    this.shoot = new KeyboardMovement(['Spacebar', ' ']);
    this.shoot.press = () => {
      const newBullet = new BulletModel();
      newBullet.x = this.x + 50;
      newBullet.y = this.y;
      this.bullets.push(newBullet);
      this.stage.addChild(newBullet);
      this.sound.play();
    };
  }

  setControls(textures) {
    this.south = new KeyboardMovement(['ArrowDown', 's']);
    this.north = new KeyboardMovement(['ArrowUp', 'w']);
    this.east = new KeyboardMovement(['ArrowRight', 'd']);
    this.west = new KeyboardMovement(['ArrowLeft', 'a']);
    this.south.press = this.setVerticalPosition.bind(this, textures.flySouth, this.speed);
    this.south.release = this.stopMotion.bind(this, textures.flyEast);
    this.north.press = this.setVerticalPosition.bind(this, textures.flyNorth, -this.speed);
    this.north.release = this.stopMotion.bind(this, textures.flyEast);
    this.east.press = this.setHorizontalPosition.bind(this, textures.flyEast, this.speed);
    this.east.release = this.stopMotion.bind(this, textures.flyEast);
    this.west.press = this.setHorizontalPosition.bind(this, textures.flyWest, -this.speed);
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
    const horizontalMovement = this.x + this.horizontalSpeed;
    const verticalMovement = this.y + this.verticalSpeed;
    const isWithinCanvasX = horizontalMovement < CANVAS_WIDTH && horizontalMovement > 0;
    const isWithinCanvasY = verticalMovement < CANVAS_HEIGHT && verticalMovement > 0;
    if (isWithinCanvasX && isWithinCanvasY) {
      this.y += this.verticalSpeed;
      this.x += this.horizontalSpeed;
    }
  }

  explode() {
    this.explosion.play();
    this.addChild(new ExplosionModel());
  }
}
