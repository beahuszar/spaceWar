import AnimatedSpriteModel from './AnimatedSpriteModel';
import setTexture from '../helpers/monster.srv';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../helpers/globals';

export default class Monster extends AnimatedSpriteModel {
  constructor() {
    const textures = setTexture();
    super({ textures });
    this.scale.set(0.3, 0.3);
    this.anchor.set(0.5);
    this.animationSpeed = 0.5;
    this.loop = true;
    this.x = CANVAS_WIDTH / 2;
    this.y = CANVAS_HEIGHT * 0.7;
  }
}
