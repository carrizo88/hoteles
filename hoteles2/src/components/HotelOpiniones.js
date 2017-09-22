/**
 * Compontente de HotelesDetalles donde se especifican las opiniones
 * Con los comentarios de las personas
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

//Defino la img del comentario
const imgPerfil = require('./img/img_avatar.png');

class hotelOpiniones extends Component {
  render() {
    return (
      <View style={styles.HotelOpinionesCard}>
            <View style={styles.rowOp}>
                  <View style={styles.columnOp}>
                      <Text style={styles.opiniones}>Opiniones</Text>
                  </View>
                        <View style={styles.columnIcono}>
                              <Icon name="comments" size={35} color="rgba(0,0,0,0.1)" />
                        </View>
                        <View style={styles.columnNumOp}>
                               <Text style={styles.opiniones2}>390 Opiniones</Text>
                        </View>
            </View>
            <View style={styles.rowOp2}>
                  <View style={styles.columnOp}>
                  <Text style={styles.clasificacion}>Clasificado en el puesto
                   no 1.267 de 1.807 </Text>
                   <Text style={styles.opiniones2}>Hoteles en Miami</Text>
                  </View>
            </View>

            <View style={styles.rowOp3}>
                  <View style={styles.columnIcono2}>
                        <Image style={styles.image} source={imgPerfil} />
                  </View>
                  <View style={styles.columnDireccion}>
                        <Text style={styles.comentarios}>"Un Gran Hotel"</Text>
                        <Icon name="comments" size={20} color="rgba(0,0,0,0.1)" />
                         <Text style={styles.opiniones2}>La ubicacion es increible...</Text>
                  </View>
            </View>
      </View>
    );
  }
}

//Etiquetas de Estilos
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
        height: 175,
        borderRadius: 3,
        flexWrap: 'wrap',
},
 rowOp: {
  flexDirection: 'row',
   margin: 10,
  borderBottomWidth: 0.5,
  borderBottomColor: '#9B9B9B',
  justifyContent: 'center',
},
rowOp2: {
 flexDirection: 'row',
  margin: 10,
  marginTop: -10,
 borderBottomWidth: 0.5,
 borderBottomColor: '#9B9B9B',
 justifyContent: 'center',
},
rowOp3: {
 flexDirection: 'row',
  margin: 10,
  marginTop: -10,
 alignItems: 'center',
},
columnOp: {
  flexDirection: 'column',
  margin: 1,
  flex: 1,
  justifyContent: 'center',
},
columnNumOp: {
  flexDirection: 'column',
  justifyContent: 'center',
  margin: 5,
  marginRight: 10,
},
columnIcono: {
  flexDirection: 'column',
  margin: 8,
},
columnIcono2: {
  flexDirection: 'column',
  margin: 8,
},
opiniones2: {
    fontFamily: 'Roboto Regular',
    fontSize: 12,
    color: 'rgba(0,0,0,0.54)',
    lineHeight: 14,
},
opiniones: {
    fontFamily: 'Roboto Regular',
    fontSize: 16,
    color: 'rgba(0,0,0,0.87)',
    lineHeight: 24,
},
comentarios: {
    fontFamily: 'Roboto Regular',
    fontSize: 14,
    color: '#335692',
    lineHeight: 16,
},
clasificacion: {
    fontFamily: 'Roboto Medium',
    fontSize: 14,
    color: '#678D44',
    lineHeight: 16,
},
columnDireccion: {
  flexDirection: 'column',
  margin: 5,
  marginRight: 1,
},
image: {
  width: 50,
  height: 50,
  borderRadius: 20,
},
});


//Para exportar
export default hotelOpiniones;
