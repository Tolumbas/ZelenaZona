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

import ulici from '../data/ulici';
import zelenaZona from '../data/zelenaZona';
import sinqZona from '../data/sinqZona';
import parkingCoords from '../data/parkingCoords';

import styles from '../styles/map.styles';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default class Map extends Component {
	constructor () {
			super();
			this.state = { hackHeight: screenHeight, showFreeSpaces: true };
			this.parking = [];

	//		this.parkingCoords=

			this.getFreeSpace();
			function LatLng (x, y) {
				return { latitude: x, longitude: y };
			}

			this.markers={
				latlng: LatLng(42.698724, 23.334771),
				text: "FREE"
			}
			this.podzoni =
	//		this.SinqZona =
	//		this.zelenaZona =
	//		this.ulici=

			this.location = null;

			navigator.geolocation.getCurrentPosition(suc => {
				this.location = suc.coords;
			}, fal => {

			});
	}
	componentWillMount() {
			setTimeout( () => this.setState({ ...this.state, hackHeight: screenHeight+1}), 500);
			setTimeout( () => this.setState({ ...this.state, hackHeight: screenHeight}), 1000);
	}
	getFreeSpace(){
		fetch("https://www.sofiatraffic.bg/bg/parkingDiv/",{ method: 'POST' })
		.then(resp => resp.text()) // Transform the data into json
	  .then(out => {
			//console.log(out);
			out = out.replace(/(\\")/g,'"');
			//console.log(out);
			out = out.replace(/^"/,'');
			//console.log(out);
			out = out.replace(/"$/,'');

			//console.log(out);
			out = JSON.parse(out);
			//console.log(out);
			out = out.parkingRes;
			for (var a=0;a<6;a++){
				this.parking[a] = {}
				this.parking[a].text = out[a].freePlaces;
				this.parking[a].latlng = parkingCoords[a];
			}
			console.log(this.parking);
		})
  }
	checkview({latitudeDelta:x,longitudeDelta:y}){
		// console.log(x,y,this.state.showFreeSpaces);
		if (x <  0.0322){
			this.setState({ ...this.state, showFreeSpaces: true});
		}
		else {
			this.setState({ ...this.state, showFreeSpaces: false});
		}
	}

	render () {
		var kartof = this.parking.map((el,i) => (
			<MapView.Marker
				coordinate={el.latlng}
				key={i}
			>
				<Text style={styles.text}>
					{el.text}
				</Text>
			</MapView.Marker>
		));
		return (
			<View style= {{ paddingBottom: this.state.hackHeight }}>
			<MapView
					showsCompass = {true}
					showsUserLocation = {true}
					followsUserLocation = {true}
					showsMyLocationButton = {true}
					onRegionChange = {(event)=>this.checkview(event)}
					initialRegion={{
						latitude: 42.689365,
						longitude: 23.321009,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421
					}}
					style={styles.map}
			>
			<MapView.Polygon
				coordinates={zelenaZona}
				strokeWidth={4}
				strokeColor="green"
				fillColor="rgba(0,180,0,0.2)"
			/>
				<MapView.Polygon
					coordinates={sinqZona}
					strokeWidth={4}
					strokeColor="blue"
					fillColor="rgba(0,0,255,0.1)"
				/>
				{ulici.map((ul, i) =>
          <MapView.Polyline
						key={i}
						strokeWidth= {4}
						strokeColor= "green"
						coordinates={ul}
					>
          </MapView.Polyline>
        )}
				{this.state.showFreeSpaces && kartof}

			</MapView>
			</View>
		);
	}
}
