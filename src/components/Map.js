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
			this.parking = [];

			this.parkingCoords=[
        LatLng(42.696046, 23.332726 ), //pl alexander nevski
        LatLng(42.695968, 23.326726 ), // pl knqz alexander 1
        LatLng(42.688757, 23.321690 ), // bul patriah evtimii
        LatLng(42.693639, 23.332180 ), // pl narodno subranie
				LatLng(42.694039, 23.324303 ), //ul gurko tel palata
        LatLng(42.697141, 23.318454 ), //bul aleksander stamboliiski
      ]

			this.getFreeSpace();
			function LatLng (x, y) {
				return { latitude: x, longitude: y };
			}

			this.markers={
				latlng:LatLng(42.698724, 23.334771),
				text:"FREE"
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
			this.zelenaZona = [
	      LatLng(42.699386, 23.347276 ),
	      LatLng(42.698190, 23.347228 ),
	      LatLng(42.696166, 23.347228 ),//madrid
	      LatLng(42.693550, 23.346574 ),
	      LatLng(42.691879, 23.343701 ),//startadd
				LatLng(42.691011, 23.343913 ),
				LatLng(42.686524, 23.351667 ),
				LatLng(42.683596, 23.347682 ),
	      LatLng(42.690583, 23.337836 ),//endadd
	      LatLng(42.686219, 23.331233 ),//startadd
				LatLng(42.682386, 23.335696),
				LatLng(42.676522, 23.336136),
				LatLng(42.676593, 23.337595),
				LatLng(42.676380, 23.334098),//
				LatLng(42.674338, 23.328220),
				LatLng(42.672607, 23.322143),//na4alo zavoi
				LatLng(42.672244, 23.321650),
				LatLng(42.671519, 23.321253),
				LatLng(42.672229, 23.321210),
				LatLng(42.672177, 23.320711),
				LatLng(42.670222, 23.313968),
				LatLng(42.669954, 23.313217),//james end
				LatLng(42.669477, 23.312440),
				LatLng(42.669150, 23.312922),//
				LatLng(42.669994, 23.311512),
				LatLng(42.669485, 23.311168),
				LatLng(42.670956, 23.311973),
				LatLng(42.671208, 23.311597),
				LatLng(42.671599, 23.310235),
				LatLng(42.671899, 23.309317),
				LatLng(42.672482, 23.309462),
				LatLng(42.673995, 23.312236),
				LatLng(42.674232, 23.312054),
				LatLng(42.674374, 23.312890),
				LatLng(42.677978, 23.319827),
				LatLng(42.678515, 23.321592),
				LatLng(42.682629, 23.320606),
	      LatLng(42.682230, 23.319461 ),//endadd
	      LatLng(42.681878, 23.317682 ),
	      LatLng(42.682089, 23.316397 ),
	      LatLng(42.683069, 23.315008 ),
	      LatLng(42.681368, 23.313181 ),
	      LatLng(42.681103, 23.308561 ),
	      LatLng(42.679220, 23.302664 ),
	      LatLng(42.680450, 23.302348 ),
				LatLng(42.682676, 23.311996 ),
				LatLng(42.684180, 23.314099 ),
				LatLng(42.690213, 23.306333 ),
				LatLng(42.691995, 23.309708 ),
				LatLng(42.692476, 23.309708 ),//ruski pametnik
				LatLng(42.692722, 23.309995 ),
				LatLng(42.694570, 23.308798 ),
				LatLng(42.695226, 23.308679 ),
				LatLng(42.704942, 23.311322 ),
				LatLng(42.712598, 23.314810 ),
				LatLng(42.713408, 23.315473 ),
				LatLng(42.711584, 23.319335 ),
				LatLng(42.712155, 23.319815 ),
				LatLng(42.711022, 23.323025 ),
				LatLng(42.710306, 23.322463 ),
				LatLng(42.709367, 23.324016 ),
				LatLng(42.708391, 23.324349 ),
			 	LatLng(42.708679, 23.326090 ),
			 	LatLng(42.707362, 23.326428 ),//budape6ta
			 	LatLng(42.707978, 23.330149 ),
			 	LatLng(42.708005, 23.330806 ),
			 	LatLng(42.707791, 23.331411 ),
			 	LatLng(42.707515, 23.332255 ),
				LatLng(42.705476, 23.332827 ),
				LatLng(42.705421, 23.333289 ),
				LatLng(42.705026, 23.333713 ),
				LatLng(42.704779, 23.334043 ),
				LatLng(42.702090, 23.339171 ),
				LatLng(42.699914, 23.344697 ),
				LatLng(42.699386, 23.347276 ),
      ]
			this.ulici=[
				[
					LatLng(42.696153, 23.347147 ), //ул мадрид
					LatLng(42.696106, 23.347930 ),
					LatLng(42.696925, 23.352866 ),//енд
				],
				[
					LatLng(42.708847, 23.324155), // enda uli4ka do centralna gara
					LatLng(42.710218, 23.324703),
					LatLng(42.710076, 23.325089),
				],
				[
					LatLng(42.681350, 23.313030 ),//витоша
					LatLng(42.679256, 23.310761 ),
					LatLng(42.674798, 23.308917 ),
				],
				[
					LatLng(42.684455, 23.301204 ),//ул георги софииски
					LatLng(42.686208, 23.307786 ),
				],
				[
					LatLng(42.665013, 23.317677 ),//никола вапцатов
					LatLng(42.666518, 23.322591 ),//енд
				]
			]

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
	getFreeSpace(){
		fetch("https://www.sofiatraffic.bg/bg/parkingDiv/",{ method: 'POST' })
		.then(resp => resp.text()) // Transform the data into json
	  .then(out => {
			console.log(out);
			out = out.replace(/(\\")/g,'"');
			console.log(out);
			out = out.replace(/^"/,'');
			console.log(out);
			out = out.replace(/"$/,'');

			console.log(out);
			out = JSON.parse(out);
			console.log(out);
			out = out.parkingRes;
			for (var a=0;a<6;a++){
				this.parking[a] = {}
				this.parking[a].text = out[a].freePlaces;
				this.parking[a].latlng = this.parkingCoords[a];
			}
			console.log(this.parking);
		})
  }

	render () {
		return (
			<View style= {{ paddingBottom: this.state.hackHeight }}>
			<MapView
					showsCompass = {true}
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
				coordinates={this.zelenaZona}
				strokeWidth={4}
				strokeColor="green"
				fillColor="rgba(0,180,0,0.2)"
			/>
				<MapView.Polygon
					coordinates={this.SinqZona}
					strokeWidth={4}
					strokeColor="blue"
					fillColor="rgba(0,0,255,0.1)"
				/>
				{this.ulici.map((ul, i) =>
          <MapView.Polyline
						key={i}
						strokeWidth= {4}
						strokeColor= "green"
						coordinates={ul}
					>
          </MapView.Polyline>
        )}
				{this.parking.map((el,i)=>(
					<MapView.Marker coordinate={el.latlng}>
						<Text style={styles.text}>
							{el.text}
						</Text>
					</MapView.Marker>
				))
			}


			</MapView>
			</View>
		);
	}
}
