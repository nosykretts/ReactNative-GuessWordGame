/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import {Provider} from 'react-redux'
import stores from '../stores'
import HomeScreen from './HomeScreen'
import GameScreen from './GameScreen'
import FinishScreen from './FinishScreen'

const Navigation = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions:{
      header: null
    }
  },
  GameScreen: {
    screen: GameScreen,
    navigationOptions:{
      header: null
    }
  },
  FinishScreen : {
    screen : FinishScreen
  }
})

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={stores}>
        <Navigation/>
      </Provider>
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
});
