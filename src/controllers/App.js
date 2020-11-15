import { Application } from '@pixi/app';
import {
  CANVAS_WIDTH, CANVAS_HEIGHT, SPLASH_SCREEN,
} from '../helpers/globals';
import updateScreen from '../helpers/app.srv';

class App extends Application {
  constructor() {
    super({
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      backgroundColor: 0x283747,
    });
  }

  gameLoop() {
    if (!this.currentScreen.isActive) {
      this.currentScreen = updateScreen(this.stage, this.ticker);
      if (!this.ticker.started) return;
      this.stage.addChild(this.currentScreen);
    }
    this.currentScreen.gameLoop();
  }

  initGame() {
    document.body.appendChild(this.view);
    this.stage.state = SPLASH_SCREEN;
    this.currentScreen = updateScreen(this.stage);
    this.stage.addChild(this.currentScreen);
    this.ticker.add(this.gameLoop.bind(this));
  }
}

export default App;
