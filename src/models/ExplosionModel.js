import { createExplosionTexture } from '../helpers/spaceship.srv';
import AnimatedSpriteModel from './AnimatedSpriteModel';

export default class ExplosionModel extends AnimatedSpriteModel {
  constructor() {
    const textures = createExplosionTexture();
    super({ textures });
    this.animationSpeed = 0.2;
    this.loop = false;
    this.onComplete = () => {
      const spaceship = this.parent;
      if (spaceship.parent) {
        spaceship.parent.removeChild(spaceship);
      }
      this.destroy();
    };
  }
}
