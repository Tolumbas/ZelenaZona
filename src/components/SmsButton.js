import React from 'react';
import {
	View,
	Text
} from 'react-native';
import ActionButton from 'react-native-action-button';
import SendSMS from 'react-native-sms';

import styles from '../styles/smsButton.styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SmsButton extends React.Component {

	sms(zone){
		var tel;
		if (zone == "green"){
			tel = "0000";
		}
		if (zone == "blue"){
			tel = "0000";
		}
		SendSMS.send({
			body: 'The default body of the SMS!',
			recipients: [tel],
			successTypes: ['sent', 'queued']
		}, (completed, cancelled, error) => {
			console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
		});
	}

	render () {
		return (
			<ActionButton
				fixNativeFeedbackRadius
				buttonColor="#ff4d4d"
				position="right"

				// onPress={(event) =>
			>
			<ActionButton.Item buttonColor='#47d147' title="Зелена Зона" onPress={()=>this.sms("green")}>
				<Icon name="md-text" style={styles.icon} />
			</ActionButton.Item>
			<ActionButton.Item buttonColor='#4d94ff' title="Синя зона" onPress={()=>this.sms("blue")}>
				<Icon name="md-text" style={styles.icon} />
			</ActionButton.Item>

			</ActionButton>
		);
	}
}
