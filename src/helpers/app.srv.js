import {
  SPLASH_SCREEN, MENU_SCREEN, GAME_SCREEN, EXIT,
} from './globals';
import SplashController from '../controllers/screenControllers/SplashController';
import MenuController from '../controllers/screenControllers/MenuController';
import GameController from '../controllers/screenControllers/GameController';

// eslint-disable-next-line consistent-return
const updateScreen = (stage, ticker) => {
  // stage.state;
  switch (stage.state) {
    case SPLASH_SCREEN:
      return new SplashController({ stage });
    case MENU_SCREEN:
      return new MenuController({ stage });
    case GAME_SCREEN:
      return new GameController({ stage });
    case EXIT:
      stage.destroy();
      ticker.destroy();
      window.location.href = 'https://github.com/beahuszar';
      return '';
    default:
      return new SplashController({ stage });
  }
};

export default updateScreen;
