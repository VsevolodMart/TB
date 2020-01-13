import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../scenes/auth/index';

import getPhonenumber from '../scenes/auth/createAccount/getPhonenumber';
import confirmCode from '../scenes/auth/createAccount/confirmCode';
import checkGeolocation from '../scenes/auth/createAccount/checkGeolocation';
import getUserData from '../scenes/auth/createAccount/getUserData';

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Login: LoginScreen,
  step1: getPhonenumber,
  step2: confirmCode,
  step3: checkGeolocation,
  step4: getUserData,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
