/**
 * Compontente de HotelesDetalles donde se especifican los Beneficios
 * con las Beneficios que tiene el hotel
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';


class Beneficios extends Component {
  render() {
    return (
      <View style={styles.BeneficiosCard}>
            <View style={styles.rowOp2}>
                  <View style={styles.columnIcono1}>
                        <Icon2 name="ios-arrow-back" size={20} color="#FFFFFF" />
                  </View>
                  <View style={styles.columnIcono2}>
                        <Icon name="wifi" size={30} color="#FFFFFF" />
                        <Text style={styles.comentario}>Wifi</Text>
                  </View>
                  <View style={styles.columnIcono2}>
                        <Icon name="automobile" size={30} color="#FFFFFF" />
                        <Text style={styles.comentario}>Estacionamiento</Text>
                  </View>
                  <View style={styles.columnIcono2}>
                        <Icon3 name="pets" size={30} color="#FFFFFF" />
                        <Text style={styles.comentario}>Mascotas</Text>
                  </View>
                  <View style={styles.columnIcono1}>
                        <Icon2 name="ios-arrow-forward" size={20} color="#FFFFFF" />
                  </View>
            </View>
      </View>
    );
  }
}

//Etiquetas de Estilos
const styles = StyleSheet.create({
  BeneficiosCard: {
    backgroundColor: '#335692',
    flexDirection: 'column',
    shadowColor: '#000000',
    shadowOpacity: 0.32,
    shadowOffset: {
      height: 0,
      width: -2
},
    elevation: 1,
    height: 80,
    padding: 20,
  },
  rowOp2: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignContent: 'flex-start',
   alignItems: 'center',
   height: 50,
  },
  columnIcono: {
    flexDirection: 'column',
    margin: 0,
  },
  columnIcono2: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  columnIcono1: {
    flexDirection: 'column',
   marginTop: 0,
  },
  comentario: {
      fontFamily: 'Roboto Light',
      fontSize: 10,
      color: '#FFFFFF',
      lineHeight: 11,
  },
});


//Para exportar
export default Beneficios;
