/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import MineSweeper from './screens/MineSweeper';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Mines: {
      screen: MineSweeper
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
  }
);

const AppContainer = createAppContainer(RootStack);

type Props = {};

export default class App extends Component<Props> {
  render() {
      return <AppContainer />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
