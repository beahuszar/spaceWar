import AnimatedSpriteModel from './AnimatedSpriteModel';
import { createEnemyTexture } from '../helpers/spaceship.srv';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../helpers/globals';
import ExplosionModel from './ExplosionModel';

export default class EnemyModel extends AnimatedSpriteModel {
  constructor() {
    const textures = createEnemyTexture();
    super({ textures });
    this.animationSpeed = 0.2;
    this.x = CANVAS_WIDTH + 50;
    this.y = CANVAS_HEIGHT * Math.random();
    this.randomMovement = {
      max: 5,
      min: -5,
    };
    this.scale.set(3, 3);
  }

  move() {
    this.x -= 1.5;
    this.y += Math.floor(
      Math.random() * (this.randomMovement.max - (this.randomMovement.min) + 1),
    ) + (this.randomMovement.min);
  }

  explode() {
    this.addChild(new ExplosionModel());
  }
}
