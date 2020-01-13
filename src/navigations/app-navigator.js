import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from '../scenes/home/HomeScreen';
import ClientMain from '../scenes/client/ClientMain';

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
  },
  Client: {
    screen: ClientMain,
  },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
