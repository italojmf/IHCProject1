/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Accelerometer } from 'react-native-sensors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class Exercicio3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acceleration: {
        x: 'unknown',
        y: 'unknown',
        z: 'unknown',
      },
      showWarning: false,
    };
    this.accelerationObservable = new Accelerometer({
      updateInterval: 100, // defaults to 100ms
    });
  }

  componentWillMount() {
    const { showWarning } = this.state;

    if (showWarning) {
      return;
    }

    this.accelerationObservable.subscribe(newAcceleration => {
      if (newAcceleration.x > 6 ||
          newAcceleration.y < 6 ||
          newAcceleration.z > 6) {
        this.setState({ showWarning: true });
      }
      this.setState({
        acceleration: newAcceleration,
      });
    });
  }
  componentWillUnmount() {
    this.accelerationObservable.stop();
  }
  render() {
    const { acceleration } = this.state;
    const { showWarning } = this.state;

    return (
      showWarning ?
        <Text>
          STOP!
        </Text>
        :
        <View style={styles.container}>
          <Text style={styles.welcome}>Acceleration:</Text>
          <Text style={styles.instructions}>
            { `X : ${Number(acceleration.x).toFixed(4)} / Y : ${Number(acceleration.y).toFixed(4)} / Z : ${Number(acceleration.z).toFixed(4)}` }
          </Text>
        </View>
    );
  }
}

export default Exercicio3;
