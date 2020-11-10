import { Application } from '@pixi/app';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../helpers/globals';

class App extends Application {
  constructor() {
    super({
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      backgroundColor: 0x283747,
    });
  }

  gameLoop(delta) { }

  initGame() {
    document.body.appendChild(this.view);
    this.stage.addChild(this.splashScreen);
    this.ticker.add(this.gameLoop.bind(this));
  }
}

export default App;
