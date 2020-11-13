import { Container } from '@pixi/display';

export default class ScreenController extends Container {
  constructor({ stage, nextScreen = '' }) {
    super();
    this.stage = stage;
    this.isActive = true;
    this.nextScreen = nextScreen;
  }

  // eslint-disable-next-line class-methods-use-this
  gameLoop() { }

  destroyScreen() {
    this.stage.children[0].forEach((child) => {
      // to debug: removeChild from elem
      child.destroy();
    });

    // todo: clear timeOut

    this.isActive = false;
  }
}
