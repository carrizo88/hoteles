/**
 * Este componente fue realizado para cumplir con la costruccion  del componente visual especifico
 * Componente 1: StarRating
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';

class StarRating extends Component {
  render() {
        /*Ingreso los iconos necesraios en
        un array stars para poder reenderizarlo luego en el return
        a travez de un for con un push recibiendo los props necesarios */
const stars = [];
       for (let i = 0; i < this.props.number; i++) {
    stars.push(
           <View key={i} >
              <Icon name="star" size={20} color={this.props.color} />
           </View>
         );
      }
      return (
             <View style={styles.componentSize}>
             {stars}
              </View>
        );
          }
    }

//Etiquetas de Estilos del Componente StarRating
const styles = StyleSheet.create({
  componentSize: {
    margin: 8,
    flexDirection: 'row',
    elevation: 1,
    height: 20,
    flexWrap: 'wrap',
  },

});


//Para exportar
export default StarRating;
