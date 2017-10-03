/**
 * Hotel Card Layout de la Informacion del hotel que aparece en el ListView HotelesLista
 * Aqui se utiliza el Componente 1: StarRating
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from './StarRating';

class hotelCard extends Component {
  render() {
        //Definicion de las props que recibe como datos como constantes
    const { image, name, icon, likes, comments } = this.props.hotel;
    return (
      <View style={styles.HotelCardBox}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.row}>
            <View style={styles.iconContainerRight}>
              <StarRating number="5" color="yellow" />
              <View style={styles.row}>
                   <Icon name={icon} size={20} color="gray" />
                  <Text style={styles.count}>{likes}</Text>
              </View>
            </View>
            <View style={styles.precioContainerleft}>
               <Text style={styles.count}>El precio por noche:</Text>
               <View style={styles.row}>
                  <Text style={styles.precio1}>ARS </Text>
                  <Text style={styles.precio2}>{comments}</Text>
               </View>

            </View>
          </View>
        </View>
      </View>
    );
  }
}

//Etiquetas de estilos
const styles = StyleSheet.create({
  HotelCardBox: {
    margin: 5,
      backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 2,
      width: -2
    },
    elevation: 2,
    height: 250,
    borderRadius: 10,
    borderWidth: 0,
    padding: 0
  },
  //Imagen
  image: {
    width: 350,
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 0
  },
  //Informacion del Hotel
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  name: {
    fontSize: 17,
    marginTop: 1,
    color: '#333',
    alignSelf: 'flex-start',
    fontFamily: 'Roboto Medium',
    fontWeight: ('bold'),
  },
  row: {
    flexDirection: 'row',
    marginTop: 5,
    margin: 5,
  },
  column: {
    flexDirection: 'column',
  },
  iconContainerRight: {
     flex: 1,
     alignItems: 'flex-start',
  },
  precioContainerleft: {
      flex: 1,
      marginRight: 15,
      alignItems: 'flex-end',
  },
  precioContainerleftCentro: {
      flex: 1,
      marginRight: 15,
      alignItems: 'flex-end',
  },
  precio1: {
        fontSize: 20,
       color: 'black'
  },
  precio2: {
      fontSize: 20,
      fontWeight: ('bold'),
      color: 'black'
  },
  count: {
      color: '#000000',
      fontFamily: 'Roboto Regular'
  }
});


//Para exportar
export default hotelCard;
