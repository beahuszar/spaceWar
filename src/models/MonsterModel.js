import AnimatedSpriteModel from './AnimatedSpriteModel';
import { setMonsterTexture } from '../helpers/texture.srv';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../helpers/globals';

export default class MonsterModel extends AnimatedSpriteModel {
  constructor() {
    const textures = setMonsterTexture();
    super({ textures });
    this.scale.set(0.3, 0.3);
    this.animationSpeed = 0.7;
    this.loop = true;
    this.x = CANVAS_WIDTH;
    this.y = CANVAS_HEIGHT * 0.7;
    this.play();
  }
}
