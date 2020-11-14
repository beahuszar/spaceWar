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

    this.stage.state = 'splash';
    this.splashScreen = new SplashController({ stage: this.stage });
  }

  gameLoop() {
    switch (this.stage.state) {
      case 'splash':
        this.splashScreen.gameLoop();
        break;
      case 'menu':
        console.log('menu');
        break;
      case 'game':
        console.log('game');
        break;
      case 'exit':
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
