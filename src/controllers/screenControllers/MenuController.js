import { Sprite } from '@pixi/sprite';
import { Texture } from '@pixi/core';
import { CANVAS_HEIGHT, CANVAS_WIDTH, TEXT_STYLE } from '../../helpers/globals';
import BackgroundModel from '../../models/BackgroundModel';
import TextModel from '../../models/TextModel';
import ScreenController from './ScreenController';
import ButtonModel from '../../models/ButtonModel';
import background from '../../assets/images/space_background_pack/layers/parallax-space-stars.png';
import planets from '../../assets/images/space_background_pack/layers/parallax-space-far-planets.png';
import logo from '../../../build/assets/walking_monster/skeleton-walking_0.png';

export default class MenuController extends ScreenController {
  constructor({ stage, nextScreen = '' }) {
    super({ stage });
    this.nextScreen = nextScreen;
    this.title = new TextModel({
      text: 'Menu',
      positionX: CANVAS_WIDTH / 2,
      positionY: CANVAS_HEIGHT * 0.1,
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
    this.getButtons();
    this.getLogo();
  }

  gameLoop() {
    this.background.tilePosition.x += 0.3;
    this.planets.tilePosition.x += 0.1;
    if (this.nextScreen !== '') {
      this.destroyScreen();
    }
  }

  getButtons() {
    const buttonTitles = [
      'GAME1',
      'GAME2',
      'GAME3',
      'EXIT',
    ];
    let gap = 0;

    buttonTitles.forEach((title, index) => {
      if (index === 0) {
        this.addChild(new ButtonModel({ title }));
      } else {
        gap += 100;
        this.addChild(new ButtonModel({ title, gap }));
      }
    });
  }

  getLogo() {
    this.logo = new Sprite();
    this.logo.texture = Texture.from(logo);
    this.logo.position.set(CANVAS_WIDTH / 2, CANVAS_HEIGHT * 0.27);
    this.logo.anchor.set(0.5);
    this.logo.width = 50;
    this.logo.height = 50;
    this.addChild(this.logo);
  }
}
