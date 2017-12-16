import React from 'react';
import {
  View,
  Dimensions,
	StyleSheet
} from 'react-native';
import ActionButton from 'react-native-action-button';

import Map from './components/Map';
import SmsButton from './components/SmsButton';


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		width: screenWidth,
		height: screenHeight,
		top: 0,
		left: 0
	}
});

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
	      <Map />
				<SmsButton />
	      <ActionButton
					fixNativeFeedbackRadius
	        buttonColor="rgba(231,76,60,1)"
	        onPress={() => { console.log("hi")}}
	      />
      </View>
    );
  }
}
