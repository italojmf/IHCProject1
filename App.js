/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  },
});

class App extends Component {
  render() {
    return (
      <ViewPagerAndroid
        style={styles.container}
        initialPage={0}
      >
        <View
          style={styles.pageStyle}
          key="1"
        >
          <Text>First page</Text>
        </View>
        <View
          style={styles.pageStyle}
          key="2"
        >
          <Text>Second page</Text>
        </View>
      </ViewPagerAndroid>
    );
  }
}

export default App;
