import { CANVAS_HEIGHT, CANVAS_WIDTH, TEXT_STYLE } from '../../helpers/globals';
import TextModel from '../../models/TextModel';
import ScreenController from './ScreenController';

export default class MenuController extends ScreenController {
  constructor({ stage, nextScreen = '' }) {
    super({ stage });
    this.visible = true;
    this.nextScreen = nextScreen;
    this.title = new TextModel({
      text: 'Menu',
      positionX: CANVAS_WIDTH / 2,
      positionY: CANVAS_HEIGHT * 0.2,
      style: { ...TEXT_STYLE },
    });
    this.addChild(this.title);
  }
}
