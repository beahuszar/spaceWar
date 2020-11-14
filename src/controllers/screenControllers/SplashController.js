import { Texture, BaseTexture } from '@pixi/core';
import { AnimatedSprite } from '@pixi/sprite-animated';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../../helpers/globals';
import BackgroundModel from '../../models/BackgroundModel';
import TextModel from '../../models/TextModel';
import ScreenController from './ScreenController';
import background from '../../assets/images/splash_background.png';
// import fontFamily from '../../assets/font/ARCADECLASSIC.ttf'; TODO: find out how to include

export default class SplashController extends ScreenController {
  constructor({ stage, nextScreen = 'menu' }) {
    super({ stage, nextScreen });
    this.background = new BackgroundModel({
      texture: background,
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
    });
    this.background = this.stage.addChild(this.background);

    const title = new TextModel({
      text: 'Space War',
      positionX: CANVAS_WIDTH / 2,
      positionY: CANVAS_HEIGHT * 0.2,
      style: {
        dropShadow: true,
        fill: '#f20707',
        fontFamily: 'Impact, Charcoal, sans-serif',
        fontSize: 150,
        fontVariant: 'small-caps',
        letterSpacing: -1,
      },
    });
    this.stage.addChild(title);

    const bla = [];
    for (let index = 0; index < 21; index++) {
      bla.push(new Texture(new BaseTexture(`./assets/walking_monster/skeleton-walking_${index}.png`)));
    }
    const animatedSprite = new AnimatedSprite(bla);
    animatedSprite.scale.set(0.3, 0.3);
    animatedSprite.anchor.set(0.5);
    animatedSprite.animationSpeed = 0.5;
    animatedSprite.loop = true;
    animatedSprite.x = CANVAS_WIDTH / 2;
    animatedSprite.y = CANVAS_HEIGHT * 0.7;
    this.stage.addChild(animatedSprite);
    animatedSprite.play();
  }

  update() {
    this.background.tilePosition.x += 0.7;
  }
}
