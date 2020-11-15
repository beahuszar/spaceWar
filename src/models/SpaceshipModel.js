import AnimatedSpriteModel from './AnimatedSpriteModel';
import { CANVAS_HEIGHT } from '../helpers/globals';
import createTextures from '../helpers/spaceship.srv';
import KeyboardMovement from './KeyboardMovement';

export default class SpaceshipModel extends AnimatedSpriteModel {
  constructor() {
    const textures = createTextures();
    super({ textures: textures.flyEast });
    this.animationSpeed = 0.2;
    this.loop = true;
    this.x = 100;
    this.y = CANVAS_HEIGHT / 2;
    this.interactive = true;
    this.speed = 2;
    this.verticalSpeed = 0;
    this.horizontalSpeed = 0;
    this.play();
    this.south = new KeyboardMovement(['ArrowDown', 's']);
    this.north = new KeyboardMovement(['ArrowUp', 'w']);
    this.east = new KeyboardMovement(['ArrowRight', 'd']);
    this.west = new KeyboardMovement(['ArrowLeft', 'a']);
    this.south.press = this.moveVertically.bind(this, textures.flySouth, 2);
    this.south.release = this.release.bind(this, textures.flyEast);
    this.north.press = this.moveVertically.bind(this, textures.flyNorth, -2);
    this.north.release = this.release.bind(this, textures.flyEast);
    this.east.press = this.moveHorizontally.bind(this, textures.flyEast, 2);
    this.east.release = this.release.bind(this, textures.flyEast);
    this.west.press = this.moveHorizontally.bind(this, textures.flyWest, -2);
    this.west.release = this.release.bind(this, textures.flyEast);
  }

  moveVertically(texture, speed) {
    this.textures = texture;
    this.verticalSpeed = speed;
    this.play();
  }

  moveHorizontally(texture, speed) {
    this.textures = texture;
    this.horizontalSpeed = speed;
    this.play();
  }

  release(texture) {
    this.textures = texture;
    this.verticalSpeed = 0;
    this.horizontalSpeed = 0;
    this.play();
  }
}
