/**
 * Compontente de HotelesDetalles donde se especifican las descripcion del hote
 * con su ubicacion y horario
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class hotelDescripcion extends Component {
  render() {
    return (
      <View style={styles.Card}>
            <View style={styles.rowOp}>
                  <View style={styles.columnOp}>
                      <Text style={styles.opiniones}>Descripcion</Text>
                  </View>
            </View>
            <View style={styles.rowDire}>
                  <View style={styles.columnIcono}>
                        <Icon name="access-time" size={24} color="rgba(0,0,0,0.54)" />
                  </View>
                  <View style={styles.columnDireccion2}>
                        <Text style={styles.direccion}>Entrada: a partir de las 15 hs</Text>
                         <Text style={styles.direccion}>Salida: Hasta las 12 hs</Text>
                  </View>
            </View>

            <View style={styles.habitacionesTipo}>
                  <View style={styles.habitacionesTipo1}>
                        <View >
                              <Text style={styles.habitacionesSta}>Ubicacion
                              del establecimiento</Text>
                        </View>
                        <View style={styles.habitacionesTipo2}>
                              <Text style={styles.habitacionesCamas}>
                              En Miami Beach (Mid Beach), Hilton Cabana</Text>
                        </View>
                        <View style={styles.habitacionesTipo2}>
                              <Text style={styles.habitacionesCamas}>
                              Miami Beach te permite llegar comodamente a...</Text>
                        </View>
                  </View>
            </View>
      </View>
    );
  }
}

//Etiquetas de Estilos
const styles = StyleSheet.create({
Card: {
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
        height: 280,
        borderRadius: 3,
        flexWrap: 'wrap',
},
 rowOp: {
  flexDirection: 'row',
   margin: 16,
  borderBottomWidth: 0.5,
  borderBottomColor: '#9B9B9B',
  borderStyle: 'dotted',
  alignItems: 'center',
  height: 48,
},
columnOp: {
  flexDirection: 'column',
  margin: 1,
  flex: 1,
  //justifyContent: 'center',
},
opiniones: {
    fontFamily: 'Roboto Regular',
    fontSize: 16,
    color: 'rgba(0,0,0,0.87)',
    lineHeight: 24,
},
columnDireccion: {
  flexDirection: 'column',
  margin: 5,
  marginRight: 1,
},
//Horarios!
rowDire: {
  flexDirection: 'row',
  margin: 16,
  borderBottomWidth: 0.5,
  borderBottomColor: '#9B9B9B',
  borderStyle: 'dotted',
   height: 72,
   marginTop: -12,
},
columnIcono: {
  flexDirection: 'column',
  justifyContent: 'center',
  margin: 8,
},
columnDireccion2: {
  flexDirection: 'column',
  justifyContent: 'center',
  margin: 5,
  marginRight: 10,
},
direccion: {
     fontFamily: 'Roboto Regular',
     fontSize: 14,
     color: 'rgba(0,0,0,0.54)',
     lineHeight: 20,
},
//Ubicacion del hotel
habitacionesTipo: {
     flexDirection: 'row',
      height: 85,
      margin: 16,
      marginTop: -12,
},
habitacionesTipo1: {
     flexDirection: 'column',
     justifyContent: 'space-around',
},
habitacionesSta: {
    fontFamily: 'Roboto Regular',
    fontSize: 18,
    color: '#335692',
    lineHeight: 16,
},
habitacionesTipo2: {
     flexDirection: 'row',
},
habitacionesCamas: {
    fontFamily: 'Roboto Regular',
    fontSize: 14,
    color: 'gray',
    lineHeight: 16,
},
});


//Para exportar
export default hotelDescripcion;
