import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps184112Navigator from '../features/Maps184112/navigator';
import Settings184090Navigator from '../features/Settings184090/navigator';
import Settings184075Navigator from '../features/Settings184075/navigator';
import NotificationList184074Navigator from '../features/NotificationList184074/navigator';
import Maps184073Navigator from '../features/Maps184073/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps184112: { screen: Maps184112Navigator },
Settings184090: { screen: Settings184090Navigator },
Settings184075: { screen: Settings184075Navigator },
NotificationList184074: { screen: NotificationList184074Navigator },
Maps184073: { screen: Maps184073Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
