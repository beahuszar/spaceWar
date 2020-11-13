import { Texture } from '@pixi/core';
import { TilingSprite } from '@pixi/sprite-tiling';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../../helpers/globals';
import ScreenController from './ScreenController';
import background from '../../images/splash_background.png';

export default class SplashController extends ScreenController {
  constructor({ stage, nextScreen = 'menu' }) {
    super({ stage, nextScreen });
    const texture = Texture.from(background);
    this.background = new TilingSprite(texture, CANVAS_WIDTH, CANVAS_HEIGHT);
    this.background.position.set(0, 0);
    this.stage.addChild(this.background);
  }

  update() {
    this.background.tilePosition.x -= 0.5;
  }
}
