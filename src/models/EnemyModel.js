import AnimatedSpriteModel from './AnimatedSpriteModel';
import { createEnemyTexture } from '../helpers/spaceship.srv';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../helpers/globals';
import ExplosionModel from './ExplosionModel';

export default class EnemyModel extends AnimatedSpriteModel {
  constructor() {
    const textures = createEnemyTexture();
    super({ textures });
    this.animationSpeed = 0.2;
    this.x = CANVAS_WIDTH * 0.8;
    this.y = CANVAS_HEIGHT / 2;
    this.scale.set(3, 3);
  }

  explode() {
    this.addChild(new ExplosionModel());
  }
}
