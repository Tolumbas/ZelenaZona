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
  View,
  Dimensions
} from 'react-native';

import MapView from 'react-native-maps';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const {height, width} = Dimensions.get('window');


export default class App extends Component<{}> {
  constructor(){
      super();
      function LatLng(x,y){
        return {latitude:x,longitude:y};
      }
      this.singlecord = [
        LatLng(42.694757, 23.311979),
        LatLng(42.6942357, 23.311679),
        LatLng(42.692757, 23.312679),
        LatLng(42.692777, 23.311129),
        LatLng(42.694757, 23.311979),
      ]
  }
  render() {
    return (

      <MapView
        initialRegion={{
          latitude: 42.689365,
          longitude: 23.321009,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style = {styles.map}
      >
      <MapView.Polygon coordinates={this.singlecord} strokeWidth={4} strokeColor="green"/>
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map:{

    position: 'absolute',
top: 0,
left: 0,
right: 0,
bottom: 0,
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
});
