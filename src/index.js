import { Application } from '@pixi/app';
import { Renderer, BatchRenderer } from '@pixi/core';
import { TickerPlugin } from '@pixi/ticker';
import { AppLoaderPlugin } from '@pixi/loaders';
import { Sprite } from '@pixi/sprite';

Renderer.registerPlugin('batch', BatchRenderer);
Application.registerPlugin(TickerPlugin);
Application.registerPlugin(AppLoaderPlugin);

const app = new Application({
  width: 256,
  height: 133,
  // resolution: window.devicePixelRatio,
});

document.body.appendChild(app.view);

app.loader.add('logo', './assets/logo.png');
app.loader.load(() => {
  const sprite = Sprite.from('logo');
  sprite.anchor.set(0.5);
  app.stage.addChild(sprite);

  sprite.x = app.screen.width / 2;
  sprite.x = app.screen.height / 2;

  app.ticker.add((delta) => {
    sprite.rotation += 0.02 * delta;
  });
});
