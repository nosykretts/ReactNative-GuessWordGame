import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavigationActions } from 'react-navigation';
import {Text, View, StyleSheet, Button, TouchableOpacity, TouchableHighlight} from 'react-native'

import {new_game, add_guess} from "../stores/actions";

class GameScreen extends React.Component {
  constructor() {
    super()
    const alpha  = 'abcdefghijklmnopqrstuvwxyz'
    this.state = {
      chars: alpha.split(''),
    }
  }
  componentDidMount() {
    this.props.newGame()
  }

  componentWillReceiveProps(nextProps){
    const {turnsLeft, puzzle, realWord} = nextProps
    const isWin = puzzle.indexOf('_') === -1 && turnsLeft >= 0
    const isLose = turnsLeft === 0

    if(isWin || isLose){
      this.resetNavigation({
        isWin,
        realWord
      })
    }
  }

  handlePress = (guess) => {
    this.props.addGuess(guess)
  }

  resetNavigation =  (params) => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'FinishScreen', params }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    const {puzzle, turnsLeft, charsUsed, gameStatus} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.board}>
          <Text style={{color: 'black',fontSize:40}}>{puzzle}</Text>
          <Text>Turns Left: {turnsLeft}</Text>
          <Text>Char used: <Text>{charsUsed.join(', ')}</Text></Text>
          <Text>Game Status: {gameStatus}</Text>

        </View>
        <View style={styles.buttonWrapper}>
          {this.state.chars.map(char => {
            const disabled = charsUsed.indexOf(char) >= 0
            return (
              <TouchableHighlight
                disabled={disabled}
                style={[styles.buttonKey, disabled ? styles.buttonKeyDisabled : styles.buttonKeyEnabled]}
                key={char}
                onPress={() => this.handlePress(char)}>
                <Text style={styles.buttonKeyText}>{char}</Text>
              </TouchableHighlight>
            )
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  board: {
    flex: 2,
    paddingTop: 30
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ceffa7',
  },
  buttonWrapper: {
    flex: 1,
    backgroundColor: 'grey',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 10,
  },
  buttonKey: {

    width: 45,
    height: 40,
    // marginTop: 5,
    marginBottom: 5,
    marginLeft: 2,
    marginRight: 2,
    justifyContent: 'center',

  },
  buttonKeyEnabled: {
    backgroundColor: 'white',
  },
  buttonKeyDisabled: {
    backgroundColor: 'crimson'
  },
  buttonKeyText: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }
});

mapStateToProps = (state) => ({
  ...state
})

mapDispatchToProps = (dispatch) => ({
  newGame : () => dispatch(new_game()),
  addGuess : (guess) => dispatch(add_guess(guess))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen);
