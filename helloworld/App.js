/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const greeting = Platform.select({
  ios: 'Hello Apple',
  android: 'Hello Android',
});

const icon = Platform.select({
  ios: require('./assets/icon_apple.png'),
  android: require('./assets/icon_android.png'),
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={icon}/>
        <Text style={styles.welcome}>{greeting}</Text>
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
  icon: {
    width: 60,
    height: 60,
    marginBottom: 30,
    marginTop: 0,
  }
});
