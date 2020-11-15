import { BaseTexture, Texture } from '@pixi/core';
import { Rectangle } from '@pixi/math';
import AnimatedSpriteModel from './AnimatedSpriteModel';
import spaceShip from '../assets/images/Spaceship-shooter-environment/spritesheets/ship.png';
import { CANVAS_HEIGHT } from '../helpers/globals';

export default class SpaceshipModel extends AnimatedSpriteModel {
  constructor() {
    const spriteSheet = BaseTexture.from(spaceShip);
    const w = 150 / 2;
    const h = 251 / 5;
    const movements = {};
    movements.flyEast = [
      new Texture(spriteSheet, new Rectangle(0, h, w, h)),
      new Texture(spriteSheet, new Rectangle(w, h, w, h)),
    ];
    movements.flyNorth = [
      new Texture(spriteSheet, new Rectangle(0, 0, w, h)),
      new Texture(spriteSheet, new Rectangle(w, 0, w, h)),
    ];
    movements.flySouth = [
      new Texture(spriteSheet, new Rectangle(0, h * 4, w, h)),
      new Texture(spriteSheet, new Rectangle(w, h * 4, w, h)),
    ];
    movements.flyWest = [
      new Texture(spriteSheet, new Rectangle(0, h * 2, w, h)),
      new Texture(spriteSheet, new Rectangle(w, h * 2, w, h)),
    ];
    super({ textures: movements.flyEast });
    this.animationSpeed = 0.2;
    this.loop = true;
    this.x = 100;
    this.y = CANVAS_HEIGHT / 2;
    this.play();
  }
}
