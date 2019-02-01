/* @flow */

import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Button} from '../components/Button';
import { NavigationScreenProps } from 'react-navigation';
type Props = NavigationScreenProps & {};

export default class HomeScreen extends React.Component<Props> {
  static navigationOptions = {
    title: 'Home',
  };

  onPlayPress = () => {
    return this.props.navigation.navigate('Mines');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Theo's MineSweeper App</Text>
        <Button onPress={this.onPlayPress}>Play Game</Button>
      </View>
    );
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
