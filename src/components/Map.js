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

import styles from '../styles/map.styles';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default class Map extends Component {
	constructor () {
			super();
			this.state = { hackHeight: screenHeight }

			function LatLng (x, y) {
				return { latitude: x, longitude: y };
			}

			this.SinqZona = [
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
			];

			this.location = null;

			navigator.geolocation.getCurrentPosition(suc => {
				this.location = suc.coords;
			}, fal => {

			});
	}
	componentWillMount() {
			setTimeout( () => this.setState({ hackHeight: screenHeight+1}), 500);
			setTimeout( () => this.setState({ hackHeight: screenHeight}), 1000);
	}
	render () {
		return (
			<View style= {{ paddingBottom: this.state.hackHeight }}>
			<MapView
					showsUserLocation = {true}
					followsUserLocation = {true}
					showsMyLocationButton = {true}
					initialRegion={{
						latitude: 42.689365,
						longitude: 23.321009,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421
					}}
					style={styles.map}
			>
				<MapView.Polygon
					coordinates={this.SinqZona}
					strokeWidth={4}
					strokeColor="blue"
					fillColor="rgba(0,0,255,0.1)"
				/>
			</MapView>
			</View>
		);
	}
}
