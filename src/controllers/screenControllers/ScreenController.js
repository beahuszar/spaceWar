import { Container } from '@pixi/display';

export default class ScreenController extends Container {
  constructor({ stage, nextScreen = '' }) {
    super();
    this.stage = stage;
    this.nextScreen = nextScreen;
  }

  // eslint-disable-next-line class-methods-use-this
  gameLoop() { }

  destroyScreen(nextScreen) {
    this.stage.children.forEach((child) => {
      this.stage.removeChild(child);
    });
    this.stage.state = nextScreen;
  }
}
