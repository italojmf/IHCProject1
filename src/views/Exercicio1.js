/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Keyboard } from 'react-native';
import { Button, Text } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    height: 50,
    margin: 10,
    width: '95%',
  },
  sendButton: {
    height: 50,
    margin: 10,
    width: '95%',
  },
});

class Exercicio1 extends Component {
  constructor() {
    super();
    this.state = {
      field1: '',
      field2: '',
      result: 0,
      displayResult: false,
    };
  }
  calculateResult() {
    this.state.result = Number(this.state.field1) + Number(this.state.field2);
  }
  showResult() {
    Keyboard.dismiss();
    this.setState({ displayResult: true });
  }
  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Row size={15}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter value for field 1"
              blurOnSubmit
              keyboardType="numeric"
              onChangeText={(field1) => this.setState({ field1 })}
            />
          </Row>
          <Row size={15}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter value for field 2"
              blurOnSubmit
              keyboardType="numeric"
              onChangeText={(field2) => this.setState({ field2 })}
            />
          </Row>
          <Row size={15}>
            <Button
              style={styles.sendButton}
              primary
              full
              onPress={() => {
                  this.calculateResult();
                  this.showResult();
                }
              }
            >
              <Text>
                SUM
              </Text>
            </Button>
          </Row>
          <Row size={55}>
            { this.state.displayResult && <Text> {this.state.result} </Text> }
          </Row>
        </Grid>
      </View>
    );
  }
}

export default Exercicio1;
