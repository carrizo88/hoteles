/**
 * NavBar Utilizada en la Segunda Layout HotelesDetalles
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
//Defino la imagen a utilizar
const img = require('./img/h2.jpg');

//En vez de utilizar un View utilizo una Image contenedora 
class NavBarDetalles extends Component {
  render() {
    return (
      <Image style={styles.NavBarDetallesBox} source={img}>
        <Icon name="md-arrow-back" size={30} color="#FFFFFF" />
        <Text style={styles.titulo}> Detalle</Text>
      </Image>
    );
  }
}

//Etiquetas de Estilos
const styles = StyleSheet.create({
  NavBarDetallesBox: {
    flexDirection: 'row',
    height: 200,
    width: null,
    padding: 15,

  },
  titulo: {
      fontFamily: 'Roboto Medium',
      fontSize: 25,
      color: '#FFFFFF',
      lineHeight: 32,
      marginLeft: 10,
  },
  image: {
    width: 350,
    height: 250,
  },
});


//Para exportar
export default NavBarDetalles;
