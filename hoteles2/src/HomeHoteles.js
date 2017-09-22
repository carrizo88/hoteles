/**
 * Primera Layout Con la lista de los hoteles
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import HotelesLista from './components/HotelesLista';
import TipoDeBusqueda from './components/TipoDeBusqueda';
import Busqueda from './components/Busqueda';

class HomeHoteles extends Component {
  render() {
        //Determino los datos que van a ser enviados al componente HotelesLista
    const hotel = {
      image: 'http://www.prensasc.com.ar/wp-content/uploads/2016/01/hotel-generic.jpg',
      name: 'Deauville Beach Resort',
      icon: 'hotel',
      likes: ' Solo la habitacion',
      comments: 1240
};
      //Cereo la cantidad de hoteles a renderizar
    const hoteles = Array(500).fill(hotel);
    return (
      <View style={styles.HomeHotelesBox}>
            <TipoDeBusqueda />
            <Busqueda />
        <HotelesLista hoteles={hoteles} />
      </View>
    );
  }
}

//Etiqueta de Estilos
const styles = StyleSheet.create({
  HomeHotelesBox: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 5,
  },
});

export default HomeHoteles;
