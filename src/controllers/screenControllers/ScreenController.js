import { Container } from '@pixi/display';

export default class ScreenController extends Container {
  constructor({ stage, nextScreen = '' }) {
    super();
    this.stage = stage;
    this.nextScreen = nextScreen;
    this.isActive = true;
  }

  // eslint-disable-next-line class-methods-use-this
  gameLoop() { }

  destroyScreen() {
    this.stage.children.forEach((child) => {
      this.stage.removeChild(child);
    });
    this.children.forEach((child) => {
      this.removeChild(child);
    });
    this.isActive = false;
    this.stage.state = this.nextScreen;
  }
}
