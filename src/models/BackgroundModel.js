import { Texture } from '@pixi/core';
import { TilingSprite } from '@pixi/sprite-tiling';

export default class BackgroundModel extends TilingSprite {
  constructor({ texture, width, height }) {
    super(Texture.from(texture), width, height);
    this.position.set(0, 0);
  }
}
