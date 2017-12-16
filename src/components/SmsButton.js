import React from 'react';
import {
	View,
	Text
} from 'react-native';

import styles from '../styles/smsButton.styles';

export default class SmsButton extends React.Component {
	render () {
		return (
			<View style={styles.smsButton}>
				<Text>sms</Text>
			</View>
		);
	}
}
