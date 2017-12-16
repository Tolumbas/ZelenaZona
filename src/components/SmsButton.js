import React from 'react';
import {
	View,
	Text
} from 'react-native';
import ActionButton from 'react-native-action-button';
import SendSMS from 'react-native-sms';

import styles from '../styles/smsButton.styles';

export default class SmsButton extends React.Component {
	render () {
		return (
			<ActionButton
				fixNativeFeedbackRadius
				buttonColor="#2196F3"
				position="right"
				onPress={() => SendSMS.send({
					body: 'The default body of the SMS!',
					recipients: ['0123456789', '9876543210'],
					successTypes: ['sent', 'queued']
				}, (completed, cancelled, error) => {
					console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
				})}
			/>
		);
	}
}
