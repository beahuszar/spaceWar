import { createBulletTexture } from '../helpers/texture.srv';
import AnimatedSpriteModel from './AnimatedSpriteModel';

export default class BulletModel extends AnimatedSpriteModel {
  constructor() {
    const textures = createBulletTexture();
    super({ textures });
    this.animationSpeed = 0.2;
    this.loop = true;
    this.scale.set(2, 2);
    this.speed = 5;
    this.play();
  }
}
