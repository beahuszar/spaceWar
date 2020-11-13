import { Application } from '@pixi/app';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../helpers/globals';
import SplashController from './screenControllers/SplashController';

class App extends Application {
  constructor() {
    super({
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      backgroundColor: 0x283747,
    });

    this.splashScreen = new SplashController({ stage: this.stage });
  }

  gameLoop() {
    this.splashScreen.update();
  }

  initGame() {
    document.body.appendChild(this.view);
    this.stage.addChild(this.splashScreen);
    this.ticker.add(this.gameLoop.bind(this));
  }
}

export default App;
