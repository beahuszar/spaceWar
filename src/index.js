import { Application } from '@pixi/app';
import { Renderer, BatchRenderer } from '@pixi/core';
import { TickerPlugin } from '@pixi/ticker';
import { AppLoaderPlugin } from '@pixi/loaders';
import { TilingSpriteRenderer } from '@pixi/sprite-tiling';
import App from './controllers/App';

Renderer.registerPlugin('batch', BatchRenderer);
Renderer.registerPlugin('tilingSprite', TilingSpriteRenderer);
Application.registerPlugin(TickerPlugin);
Application.registerPlugin(AppLoaderPlugin);

const app = new App();
app.initGame();
