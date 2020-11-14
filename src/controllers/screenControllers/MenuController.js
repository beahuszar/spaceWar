import { CANVAS_HEIGHT, CANVAS_WIDTH, TEXT_STYLE } from '../../helpers/globals';
import BackgroundModel from '../../models/BackgroundModel';
import TextModel from '../../models/TextModel';
import ScreenController from './ScreenController';
import background from '../../assets/images/space_background_pack/layers/parallax-space-stars.png';
import planets from '../../assets/images/space_background_pack/layers/parallax-space-far-planets.png';

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
    this.background = new BackgroundModel({
      texture: background,
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
    });
    this.planets = new BackgroundModel({
      texture: planets,
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
    });
    this.addChild(this.background, this.planets, this.title);
  }

  gameLoop() {
    this.background.tilePosition.x += 0.3;
    this.planets.tilePosition.x += 0.1;
  }
}
