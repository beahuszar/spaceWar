import { createExplosionTexture } from '../helpers/texture.srv';
import AnimatedSpriteModel from './AnimatedSpriteModel';

export default class ExplosionModel extends AnimatedSpriteModel {
  constructor() {
    const textures = createExplosionTexture();
    super({ textures });
    this.animationSpeed = 0.2;
    this.loop = false;
    this.scale.set(3, 3);
    this.onComplete = () => {
      this.parent.parent.removeChild(this.parent);
    };
  }
}
