/**
 * NavBar Utilizada en la Primera Layout HomeHoteles
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class NavBarHome extends Component {
  render() {
    return (
      <View style={styles.artistBox}>
        <Icon name="md-arrow-back" size={30} color="#DF6800" />
        <Text style={styles.titulo}>Elegí tu hotel (500)</Text>
        <View style={styles.icons}>
            <Icon name="md-map" size={30} color="#DF6800" />
            <Icon name="md-more" size={30} color="#DF6800" />
        </View>
      </View>
    );
  }
}

//Etiquetas de Estilos
const styles = StyleSheet.create({
  artistBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    padding: 15
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 80,
  },
  titulo: {
      fontFamily: 'Roboto Medium',
      fontSize: 20,
      color: '#000000',
      lineHeight: 24,
  },

});


//Para exportar
export default NavBarHome;
