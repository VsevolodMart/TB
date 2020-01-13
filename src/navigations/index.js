import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';

const RootNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: 'Auth',
  },
);


const AppContainer = createAppContainer(RootNavigator);

export default AppContainer;



// import React from 'react';
// import { View, Text } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
//
// import HomeScreen from '../scenes/home/HomeScreen';
// import ClientMain from '../scenes/client/ClientMain';
//
//
//
// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     ClientMain: ClientMain,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );
//
// const AppContainer = createAppContainer(RootStack);
//
// export default AppContainer;

