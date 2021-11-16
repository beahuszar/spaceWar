import {
  CANVAS_WIDTH, CANVAS_HEIGHT, MENU_SCREEN, TEXT_STYLE,
} from '../../helpers/globals';
import MonsterModel from '../../models/MonsterModel';
import BackgroundModel from '../../models/BackgroundModel';
import TextModel from '../../models/TextModel';
import ScreenController from './ScreenController';
import background from '../../assets/images/splash_background.png';

export default class SplashController extends ScreenController {
  constructor({ stage, nextScreen = MENU_SCREEN }) {
    super({ stage, nextScreen });
    this.background = new BackgroundModel({
      texture: background,
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
    });
    this.monster = new MonsterModel();
    this.title = new TextModel({
      text: 'Data War',
      positionX: CANVAS_WIDTH / 2,
      positionY: CANVAS_HEIGHT * 0.2,
      style: { ...TEXT_STYLE },
    });
    this.nextScreen = nextScreen;
    this.addChild(this.background, this.title, this.monster);
  }

  gameLoop() {
    this.background.tilePosition.x += 0.7;

    if (this.monster.x !== CANVAS_WIDTH / 2) {
      this.monster.x -= 5;
    }

    if (this.monster.x <= CANVAS_WIDTH / 2) {
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
