/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Button, Text } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
  },
  textInput: {
    height: 50,
    flex: 1,
    margin: 10,
  },
  sendButton: {
    margin: 10,
  },
  text: {
    height: 50,
    flex: 1,
    margin: 10,
  },
});

class Exercicio2 extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      renderTextOnly: false,
    };
  }
  showText() {
    this.setState({ renderTextOnly: true });
  }
  render() {
    const { renderTextOnly } = this.state;
    return (
      renderTextOnly ?
        <Text style={styles.text}>
          {this.state.text}
        </Text>
        :
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter text"
            blurOnSubmit
            onChangeText={(text) => this.setState({ text })}
          />
          <Button
            style={styles.sendButton}
            primary
            onPress={() => this.showText()}
          >
            <Text>
              SEND
            </Text>
          </Button>
        </View>
    );
  }
}

export default Exercicio2;
