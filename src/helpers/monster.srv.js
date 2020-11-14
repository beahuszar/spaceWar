import { Texture, BaseTexture } from '@pixi/core';

const setTexture = () => {
  const imgUrlArray = [];
  for (let index = 0; index < 21; index += 1) {
    imgUrlArray.push(new Texture(new BaseTexture(`./assets/walking_monster/skeleton-walking_${index}.png`)));
  }
  return imgUrlArray;
};

export default setTexture;
