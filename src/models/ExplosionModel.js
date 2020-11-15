import { createExplosionTexture } from '../helpers/spaceship.srv';
import AnimatedSpriteModel from './AnimatedSpriteModel';

export default class ExplosionModel extends AnimatedSpriteModel {
  constructor() {
    const textures = createExplosionTexture();
    super({ textures });
    this.animationSpeed = 0.1;
    this.loop = false;
    this.onComplete = () => {
      this.parent.destroy();
      this.destroy();
    };
  }
}
