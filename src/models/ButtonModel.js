import { Texture } from '@pixi/core';
import { Sprite } from '@pixi/sprite';
import { CANVAS_HEIGHT, CANVAS_WIDTH, TEXT_STYLE } from '../helpers/globals';
import TextModel from './TextModel';

export default class ButtonModel extends Sprite {
  constructor({ title, gap = 0 }) {
    super();
    this.texture = Texture.from('./assets/button.png');
    this.anchor.set(0.5);
    this.position.set(CANVAS_WIDTH / 2, CANVAS_HEIGHT * 0.4 + gap);
    this.interactive = true;
    this.buttonMode = true;
    this.cursor = 'pointer';
    this.title = title;

    this.buttonTitle = new TextModel({
      text: title,
      positionY: -5,
      style: { ...TEXT_STYLE, fontSize: 45, align: 'center' },
    });
    this.buttonTitle.anchor.set(0.5);
    this.addChild(this.buttonTitle);
    this.on('pointerover', () => {
      this.texture = Texture.from('./assets/button_hover.png');
    });

    this.on('pointerdown', () => {
      this.texture = Texture.from('./assets/button_clicked.png');
    });

    this.on('pointerout', () => {
      this.texture = Texture.from('./assets/button.png');
    });
    this.setClickAction();
  }

  setClickAction() {
    switch (this.title) {
      case 'EXIT':
        this.on('click', () => {
          window.location.href = 'https://github.com/beahuszar';
        });
        break;
      default:
        this.on('click', () => {
          console.log('Start the game!');
        });
    }
  }
}
