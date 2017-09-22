/**
 * Segunda Layout con los Detalles de los Hoteles
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
// Se importan todos los componentes a utilizar
import HotelDetalleGeneral from './components/HotelDetalleGeneral';
import HotelOpiniones from './components/HotelOpiniones';
import Beneficios from './components/Beneficios';
import HotelHabitaciones from './components/HotelHabitaciones';
import HotelDescripcion from './components/HotelDescripcion';
import HotelOpciones from './components/HotelOpciones';
import NavBarDetalles from './components/NavBarDetalles';

class HomeDetalles extends Component {
  render() {
    return (
      <View style={styles.container}>
            <ScrollView>
                   <NavBarDetalles />
                   <HotelDetalleGeneral />
                   <HotelOpiniones />
                   <Beneficios />
                   <HotelHabitaciones />
                   <HotelDescripcion />
                   <HotelOpciones />
            </ScrollView>
      </View>

    );
  }
}

// Etiquetas de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: -30,
  },
});

export default HomeDetalles;
