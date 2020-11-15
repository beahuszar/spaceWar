export default class KeyboardMovement {
  constructor(values) {
    this.values = values;
    this.isDown = false;
    this.isUp = true;
    this.press = undefined;
    this.release = undefined;
    document.addEventListener('keydown', this.downHandler.bind(this));
    document.addEventListener('keyup', this.upHandler.bind(this));
  }

  downHandler(event) {
    if (this.values.some((value) => value === event.key)) {
      if (this.isUp && this.press) this.press();
      this.isDown = true;
      this.isUp = false;
      event.preventDefault();
    }
  }

  upHandler(event) {
    if (this.values.some((value) => value === event.key)) {
      if (this.isDown && this.release) this.release();
      this.isDown = false;
      this.isUp = true;
      event.preventDefault();
    }
  }

  removeListeners() {
    document.removeEventListener('keydown', this.downHandler);
    document.removeEventListener('keyup', this.upHandler);
  }
}
