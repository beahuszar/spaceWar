import { createExplosionTexture } from '../helpers/spaceship.srv';
import AnimatedSpriteModel from './AnimatedSpriteModel';

export default class ExplosionModel extends AnimatedSpriteModel {
  constructor() {
    const textures = createExplosionTexture();
    super({ textures });
    this.animationSpeed = 0.2;
    this.loop = false;
    this.scale.set(3, 3);
    this.onComplete = () => {
      const explodingObject = this.parent;
      if (explodingObject.parent) {
        explodingObject.parent.removeChild(explodingObject);
      }
      this.destroy();
    };
  }
}
