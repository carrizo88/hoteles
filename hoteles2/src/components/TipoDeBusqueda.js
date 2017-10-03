/**
 * Toolbar de los Tipos de Busquedas
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class TipoDeBusqueda extends Component {
  render() {
    return (
      <View style={styles.TipoDeBusquedaBox}>
            <View style={styles.texto}>
                  <Text style={styles.titulo}>Miami, Estados Unidos De...</Text>
                  <Text style={styles.titulo}>13 de mar. 2016-12 Noches (500)</Text>
            </View>
        <View style={styles.textoYIconos}>
            <Icon name="hotel" size={25} color="#FFFFFF" />
             <Text style={styles.numeros}>06</Text>
        </View>
        <View style={styles.textoYIconos}>
            <Icon name="users" size={25} color="#FFFFFF" />
             <Text style={styles.numeros}>02</Text>
        </View>
      </View>
    );
  }
}

//Etiquetas de los Estilos
const styles = StyleSheet.create({
  TipoDeBusquedaBox: {
    backgroundColor: '#DF6800',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    padding: 10
  },
  textoYIconos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 0.25,
    borderLeftWidth: 1,
    borderLeftColor: '#FFFFFF'
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
     backgroundColor: 'black',
  },
  texto: {
    flexDirection: 'column',
    justifyContent: 'center',
      flex: 0.5
  },
  titulo: {
      fontFamily: 'Roboto Regular',
      fontSize: 10,
      color: '#FFFFFF',
      lineHeight: 12,
  },
  numeros: {
      fontFamily: 'Roboto Regular',
      fontSize: 15,
      color: '#FFFFFF',
      lineHeight: 18,
  },
});


//Para exportar
export default TipoDeBusqueda;
