import { Application } from '@pixi/app';
import {
  CANVAS_WIDTH, CANVAS_HEIGHT, SPLASH_SCREEN, MENU_SCREEN, GAME_SCREEN, EXIT,
} from '../helpers/globals';
import SplashController from './screenControllers/SplashController';
import MenuController from './screenControllers/MenuController';

class App extends Application {
  constructor() {
    super({
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      backgroundColor: 0x283747,
    });

    this.stage.state = SPLASH_SCREEN;
    this.splashScreen = new SplashController({ stage: this.stage });
    this.menuScreen = new MenuController({ stage: this.stage });
  }

  gameLoop() {
    switch (this.stage.state) {
      case SPLASH_SCREEN:
        this.splashScreen.gameLoop();
        break;
      case MENU_SCREEN:
        console.log('menu');
        break;
      case GAME_SCREEN:
        console.log('game');
        break;
      case EXIT:
        console.log('exit');
        break;
      default:
        this.splashScreen.gameLoop();
    }
  }

  initGame() {
    document.body.appendChild(this.view);
    this.stage.addChild(this.splashScreen);
    this.ticker.add(this.gameLoop.bind(this));
  }
}

export default App;
