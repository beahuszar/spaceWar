import { Text, TextStyle } from '@pixi/text';

export default class TextModel extends Text {
  constructor({
    text = '', positionX = 0, positionY = 0, style = {},
  }) {
    super(text, new TextStyle({ ...style }));
    this.position.set(positionX, positionY);
    this.anchor.set(0.5);
  }
}
