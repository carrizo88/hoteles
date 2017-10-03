/**
 * Toolbar de Busquedas
 */
 import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class Busqueda extends Component {
      constructor(props) {
    super(props);
    this.state = { text: 'Escribí el hotel que buscas' };
  }
  render() {
    return (
      <View style={styles.busquedaBox}>
            <Icon name="md-search" size={30} color="rgba(0,0,0,0.54)" />
            <TextInput
                   style={{ height: 40, width: 280 }}
                   onChangeText={(text) => this.setState({ text })}
                   value={this.state.text}
            />
            <Icon name="md-mic" size={30} color="rgba(0,0,0,0.54)" />
      </View>
    );
  }
}

//Etiquetas de Estilos
const styles = StyleSheet.create({
      busquedaBox: {
        margin: 5,
         backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {
          height: 2,
          width: -2
        },
        elevation: 2,
        height: 50,
        borderRadius: 10,
        borderWidth: 0,
        padding: 5
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
export default Busqueda;
