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
  Dimensions,
  Button
} from 'react-native';

import MapView from 'react-native-maps';
import ActionButton from 'react-native-action-button';

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
        LatLng(42.698724, 23.334771),
        LatLng(42.696922, 23.335406),
        LatLng(42.696681, 23.335696),
        LatLng(42.696425, 23.335374),
        LatLng(42.692307, 23.334012),
        LatLng(42.687632, 23.328385),
        LatLng(42.685908, 23.321280),
        LatLng(42.686304, 23.318055),
        LatLng(42.689438, 23.313961),
        LatLng(42.694819, 23.315242),
        LatLng(42.697535, 23.315156),
        LatLng(42.697587, 23.315168),
        LatLng(42.698890, 23.315578),
        LatLng(42.697500, 23.323330),
        LatLng(42.698724, 23.334771),
      ],
      this.location = null;
      navigator.geolocation.getCurrentPosition(suc=>{
        this.location = suc.coords;
      },fal=>{

      });
  }
  render() {
    return (
      <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 42.689365,
          longitude: 23.321009,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style = {styles.map}
      >
      {this.location && <MapView.Marker coordinate={this.location}/>}
      <MapView.Polygon coordinates={this.singlecord} strokeWidth={4} strokeColor="blue" fillColor="rgba(0,0,255,0.1)"/>
      </MapView>
      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        onPress={() => { console.log("hi")}}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width,
    height,
    top: 0,
    left: 0,
  },
  map:{
    ...StyleSheet.absoluteFillObject
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
