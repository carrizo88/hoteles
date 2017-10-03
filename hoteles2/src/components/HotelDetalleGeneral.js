/**
 * Compontente de HotelesDetalles donde se especifican los Detalles
 * de ubicacion, nombre del hotel entre otros
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import StarRating from './StarRating';

class hotelDetalleGeneral extends Component {
      //Se define el estado de la region
      constructor() {
          super();
      this.state = {
     region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
     },
  };
  }
  render() {
    return (
      <View style={styles.HotelDetalleGeneralCard}>
            <View style={styles.rowTitulo}>
                  <Text style={styles.titulo}>Hilton Cabana Miami Beach</Text>
            </View>
                  <StarRating number="3" color="yellow" />
            <View style={styles.rowDire}>
                  <View style={styles.columnIcono}>
                        <Icon name="map-marker" size={28} color="rgba(0,0,0,0.54)" />
                  </View>
                  <View style={styles.columnDireccion}>
                        <Text style={styles.direccion}>6261 Collins Ave, Miami Beach,
                         FL 33140,</Text>
                         <Text style={styles.direccion}>Estados Unidos</Text>
                  </View>
            </View>
            <View style={styles.rowMap}>
            <MapView
           provider={this.props.provider}
           style={styles.map}
           initialRegion={this.state.region}
            >
           <MapView.Marker
             title="Ubicacion del Hotel"
             description="Descripcion del Hotel"
             coordinate={this.state.region}
           />
         </MapView>
            </View>
      </View>
    );
  }
}

//Etiquetas de Estilos
const styles = StyleSheet.create({
  HotelDetalleGeneralCard: {
    margin: 8,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    shadowColor: '#000000',
    shadowOpacity: 0.32,
    shadowOffset: {
      height: 0,
      width: -2
},
    elevation: 1,
    height: 250,
    borderRadius: 3,
    flexWrap: 'wrap',
    padding: -20,
  },
  //Definicion del Tamaño del Mapa
  map: {
     width: 350,
     height: 250,
   },
  rowTitulo: {
    flexDirection: 'row',
    marginTop: 8,
     margin: 10,
  },
  rowDire: {
    flexDirection: 'row',
    marginTop: 5,
    margin: 10,
  },
  rowStartComponente: {
    flexDirection: 'row',
    marginTop: 1,
    margin: 10,
  },
  rowMap: {
    flexDirection: 'row',
    marginTop: 1,
    height: 150,
    width: 350,
    flex: 1,
  },
  column: {
    flexDirection: 'column',
    margin: 1,
  },
  columnDireccion: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 5,
    marginRight: 10,
  },
  columnIcono: {
    flexDirection: 'column',
    margin: 8,
  },
  titulo: {
        marginTop: 5,
        fontFamily: 'Roboto Medium',
        fontSize: 20,
        color: 'rgba(0,0,0,0.87)',
 },
 direccion: {
      fontFamily: 'Roboto Regular',
      fontSize: 14,
      color: 'rgba(0,0,0,0.54)',
      lineHeight: 20,
}
});


//Para exportar
export default hotelDetalleGeneral;
