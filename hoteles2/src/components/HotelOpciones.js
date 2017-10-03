/**
 * Compontente de HotelesDetalles donde se especifican las opciones de servicios
 *  que puede contar el cliente en el hotel
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class HotelOpiniones extends Component {
  render() {
    return (
      <View style={styles.HotelOpinionesCard}>
                  <View style={styles.opciones1}>
                              <Text style={styles.titulos}>
                              Cancelacion/Prepago
                              </Text>
                              <Text style={styles.textos}>
                              Las condiciones de cancelacion y prepago por
                              adelantado pueden variar segun el tipo de...
                              </Text>
                  </View>
                  <View style={styles.opciones1}>
                              <Text style={styles.titulos}>
                              Servicios Opcionales de habitacion
                              </Text>
                              <Text style={styles.textos}>
                              Los siguientes cargos y depositos se pagan
                              directamente en el hotel al recibir el servicio.
                              </Text>
                  </View>
                  <View style={styles.opciones3}>
                              <Text style={styles.titulos}>
                              Servicios incluídos en la reserva
                              </Text>
                              <Text style={styles.textos}>
                              Los siguientes cargos se pagan en el hotel:
                              </Text>
                  </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
HotelOpinionesCard: {
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
        height: 264,
        borderRadius: 3,
        flexWrap: 'wrap',
},
//Opciones del Hotel
opciones1: {
     flexDirection: 'column',
     justifyContent: 'center',
     borderBottomWidth: 0.5,
     borderBottomColor: '#9B9B9B',
     borderStyle: 'dotted',
     height: 88,
     padding: 10,
},
opciones3: {
     flexDirection: 'column',
     justifyContent: 'center',
     height: 72,
     padding: 10,
},
titulos: {
    fontFamily: 'Roboto Regular',
    fontSize: 18,
    color: '#335692',
    lineHeight: 24,
},
textos: {
    fontFamily: 'Roboto Regular',
    fontSize: 14,
    color: 'gray',
    lineHeight: 16,
},
});


//Para exportar
export default HotelOpiniones;
