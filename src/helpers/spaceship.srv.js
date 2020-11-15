import { BaseTexture, Texture } from '@pixi/core';
import { Rectangle } from '@pixi/math';
import spaceShip from '../assets/images/Spaceship-shooter-environment/spritesheets/ship.png';

const createTextures = () => {
  const spriteSheet = BaseTexture.from(spaceShip);
  const w = 150 / 2;
  const h = 251 / 5;
  const movements = {};
  movements.flyEast = [
    new Texture(spriteSheet, new Rectangle(0, h, w, h)),
    new Texture(spriteSheet, new Rectangle(w, h, w, h)),
  ];
  movements.flyNorth = [
    new Texture(spriteSheet, new Rectangle(0, 0, w, h)),
    new Texture(spriteSheet, new Rectangle(w, 0, w, h)),
  ];
  movements.flySouth = [
    new Texture(spriteSheet, new Rectangle(0, h * 4, w, h)),
    new Texture(spriteSheet, new Rectangle(w, h * 4, w, h)),
  ];
  movements.flyWest = [
    new Texture(spriteSheet, new Rectangle(0, h * 2, w, h)),
    new Texture(spriteSheet, new Rectangle(w, h * 2, w, h)),
  ];
  return movements;
};

export default createTextures;
