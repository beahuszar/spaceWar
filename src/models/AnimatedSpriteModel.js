/* eslint-disable class-methods-use-this */
import { AnimatedSprite } from '@pixi/sprite-animated';

export default class AnimatedSpriteModel extends AnimatedSprite {
  constructor({ textures }) {
    super(textures);
  }
}
