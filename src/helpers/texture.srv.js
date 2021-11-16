import { BaseTexture, Texture } from '@pixi/core';
import { Rectangle } from '@pixi/math';
import spaceShip from '../assets/images/noémi/noémi_resized.png';
import bullet from '../assets/images/Spaceship-shooter-environment/spritesheets/laser-bolts.png';
import enemy from '../assets/images/Spaceship-shooter-environment/spritesheets/enemy-medium.png';
import explosion from '../assets/images/Spaceship-shooter-environment/spritesheets/explosion.png';

export const createSpaceshipTextures = () => {
  const spriteSheet = BaseTexture.from(spaceShip);
  const w = 158 / 2;
  const h = 158 / 2;
  const movements = {};
  movements.flyEast = [
    new Texture(spriteSheet, new Rectangle(w, 0, w, h)),
  ];
  movements.flyNorth = [
    new Texture(spriteSheet, new Rectangle(0, 0, w, h)),
  ];
  movements.flySouth = [
    new Texture(spriteSheet, new Rectangle(0, h, w, h)),
  ];
  movements.flyWest = [
    new Texture(spriteSheet, new Rectangle(w, h, w, h)),
  ];
  return movements;
};

export const createBulletTexture = () => {
  const spriteSheet = BaseTexture.from(bullet);
  const w = 32 / 2;
  const h = 32 / 2;
  const animation = [
    new Texture(spriteSheet, new Rectangle(w, 0, w, h)),
    new Texture(spriteSheet, new Rectangle(w, h, w, h)),
  ];
  return animation;
};

export const createEnemyTexture = () => {
  const animation = [
    new Texture(new BaseTexture(`./assets/gdprenemies/gdprenemy${Math.ceil(Math.random() * 5)}.png`)),
  ];
  return animation;
};

export const createExplosionTexture = () => {
  const spriteSheet = BaseTexture.from(explosion);
  const w = 80 / 5;
  const h = 16;
  const animation = [
    new Texture(spriteSheet, new Rectangle(0, 0, w, h)),
    new Texture(spriteSheet, new Rectangle(w, 0, w, h)),
    new Texture(spriteSheet, new Rectangle(w * 2, 0, w, h)),
    new Texture(spriteSheet, new Rectangle(w * 3, 0, w, h)),
    new Texture(spriteSheet, new Rectangle(w * 4, 0, w, h)),
  ];
  return animation;
};

export const setMonsterTexture = () => {
  const imgUrlArray = [];
  for (let index = 1; index < 32; index += 1) {
    imgUrlArray.push(new Texture(new BaseTexture(`./assets/mydata/${index}.png`)));
  }
  return imgUrlArray;
};
