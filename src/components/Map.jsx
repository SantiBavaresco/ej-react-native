import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { mapStyle } from './mapStyle';
import { StyleSheet, View, Dimensions } from 'react-native';

function initMap() {
    const myLatLng = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MapView style={styles.map} /> */}
      <MapView
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -33.745326,
          longitude: -61.968774,
          latitudeDelta: 0.035,
          longitudeDelta: 0.035,
        }}
        mapType="standard"
      >
        <Marker
            key="{index}"
            coordinate={{ latitude : -33.744015 , longitude : -61.958717 }}
            title="Trabajo de claudio"
            description="aca trabaja claudio"
        />
      </MapView>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});