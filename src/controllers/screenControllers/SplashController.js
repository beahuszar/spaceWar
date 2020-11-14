import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../../helpers/globals';
import Monster from '../../models/Monster';
import BackgroundModel from '../../models/BackgroundModel';
import TextModel from '../../models/TextModel';
import ScreenController from './ScreenController';
import background from '../../assets/images/splash_background.png';

const title = new TextModel({
  text: 'Space War',
  positionX: CANVAS_WIDTH / 2,
  positionY: CANVAS_HEIGHT * 0.2,
  style: {
    dropShadow: true,
    fill: '#f20707',
    fontFamily: 'Arcade',
    fontSize: 150,
    fontVariant: 'small-caps',
    letterSpacing: -1,
  },
});

const animatedSprite = new Monster();
export default class SplashController extends ScreenController {
  constructor({ stage, nextScreen = 'menu' }) {
    super({ stage, nextScreen });
    this.background = new BackgroundModel({
      texture: background,
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
    });
    this.stage.addChild(this.background, title, animatedSprite);
    animatedSprite.play();
  }

  update() {
    this.background.tilePosition.x += 0.7;
  }
}
