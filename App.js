/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Tabbar from 'react-native-tabbar-bottom';

import Exercicio1 from './src/views/Exercicio1';
import Exercicio2 from './src/views/Exercicio2';
import Exercicio3 from './src/views/Exercicio3';

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
  constructor() {
    super();
    this.state = {
      page: 'exercicio1',
    };
  }

  pageRender = () => {
    const { page } = this.state;
    switch (page) {
      case 'exercicio2':
        return <Exercicio2 />;
      case 'exercicio3':
        return <Exercicio3 />;
      default:
        return <Exercicio1 />;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.pageRender()}
        <Tabbar
          type="ripple"
          rippleEffect
          rippleColor="lightblue"
          stateFunc={tab => {
            this.setState({ page: tab.page });
          }}
          activePage={this.state.page}
          tabs={[
            {
              page: 'exercicio1',
              icon: 'code',
              iconText: 'adjust',
            },
            {
              page: 'exercicio2',
              icon: 'code',
              iconText: 'notifications',
            },
            {
              page: 'exercicio3',
              icon: 'code',
              iconText: 'person',
            },
          ]}
        />
      </View>
    );
  }
}

export default App;
