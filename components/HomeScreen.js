import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native'


class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>WELCOME TO HELL</Text>
        <Button onPress={()=> this.props.navigation.navigate('GameScreen')} title={'Play'}/>
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
});

export default HomeScreen
