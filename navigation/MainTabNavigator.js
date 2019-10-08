import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MainScreen from '../screens/MainScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);
HomeStack.navigationOptions = {
  tabBarLabel: 'Sujets',
  tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
  ),
};
HomeStack.path = '';
const MainStack = createStackNavigator(
  {
    Main: MainScreen,
  },
  config
);
MainStack.navigationOptions = {
  tabBarLabel: 'Proposer',
  tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} />
  ),
};
MainStack.path = '';
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  MainStack,
});
tabNavigator.path = '';

export default tabNavigator;