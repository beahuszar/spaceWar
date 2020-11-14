import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../../helpers/globals';
import Monster from '../../models/Monster';
import BackgroundModel from '../../models/BackgroundModel';
import TextModel from '../../models/TextModel';
import ScreenController from './ScreenController';
import background from '../../assets/images/splash_background.png';

export default class SplashController extends ScreenController {
  constructor({ stage, nextScreen = 'menu' }) {
    super({ stage, nextScreen });
    this.background = new BackgroundModel({
      texture: background,
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
    });
    this.monster = new Monster();
    this.title = new TextModel({
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
    this.nextScreen = 'menu';
    this.stage.addChild(this.background, this.title, this.monster);
  }

  gameLoop() {
    this.background.tilePosition.x += 0.7;

    if (this.monster.x !== CANVAS_WIDTH / 2) {
      this.monster.x -= 5;
    }

    if (this.monster.x === CANVAS_WIDTH / 2) {
      this.monster.stop();
      this.monster.alpha -= 0.01;
      this.title.alpha -= 0.01;
      this.background.alpha -= 0.01;
    }

    if (this.background.alpha < 0) {
      this.destroyScreen(this.nextScreen);
    }
  }
}
