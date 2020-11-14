import {
  SPLASH_SCREEN, MENU_SCREEN, GAME_SCREEN, EXIT,
} from './globals';
import SplashController from '../controllers/screenControllers/SplashController';
import MenuController from '../controllers/screenControllers/MenuController';

const updateScreen = (stage) => {
  switch (stage.state) {
    case SPLASH_SCREEN:
      return new SplashController({ stage });
    case MENU_SCREEN:
      return new MenuController({ stage });
    case GAME_SCREEN:
      console.log('game');
      return '';
    case EXIT:
      console.log('exit');
      return '';
    default:
      return new SplashController({ stage });
  }
};

export default updateScreen;
