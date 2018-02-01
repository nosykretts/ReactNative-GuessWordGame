import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, Button, StyleSheet} from 'react-native'

export default class FinishScreen extends Component {
  render() {
    const {isWin, realWord} = this.props.navigation.state.params
    const goHome = () => this.props.navigation.navigate('HomeScreen')
    return (
      <View style={styles.container}>
        <Text style={styles.big}>{isWin ? 'You Win': 'You Lose'}</Text>
        <Text>Real Word</Text>
        <Text style={styles.big}>{realWord}</Text>
        <Button onPress={goHome} title={'Go To Home'}/>
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
  big: {
    fontSize: 40
  }
});

// function mapStateToProps(state) {
//   return {};
// }
//
// export default connect(
//   mapStateToProps,
// )(FinishScreen);
