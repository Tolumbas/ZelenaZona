import React from 'react';
import {
  View,
  Dimensions,
	StyleSheet,
	TextInput,
	Text
} from 'react-native';
import ActionButton from 'react-native-action-button';

import Modal from 'react-native-modalbox';

import Map from './components/Map';
import SmsButton from './components/SmsButton';


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject
	}
});

export default class App extends React.Component<{}> {
	constructor () {
		super();

		this.state = { modalIsOpen: false }
	}

  render () {
    return (
      <View style={styles.container}>
	      <Map />
				<SmsButton onModalRequest={() => this.setState({ modalIsOpen: true })} />
				<Modal
					isOpen={this.state.modalIsOpen}
					position="center"
					style={{
						width: 300,
						height: 100,
						justifyContent: 'center',
					}}
				>
					<Text>Запазване на регистрационен номер:</Text>
					<TextInput />
				</Modal>
      </View>
    );
  }
}
