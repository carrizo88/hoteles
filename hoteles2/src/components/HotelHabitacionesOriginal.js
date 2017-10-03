/**
 * Compontente de HotelesDetalles donde se especifican las Habitaciones y
 * Caracteristicas de las mismas
 * Este componte incluye el Componente 2: MealPlanPicker
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import MealPlanPicker from './MealPlanPicker/MealPlanPicker';
import MPP from './MealPlanPicker/MPP';

class HotelHabitaciones extends Component {

      constructor(props) {
    super(props);
    // Le paso el bind del contexto a la handler function
     this.handler = this.handler.bind(this);
    // se setea el estado
    this.state = {
        mostrarlista: false
    };
}
// Este metodo va a ser enviado al componente Hijo
handler(e) {
    e.preventDefault();
    this.setState({
      mostrarlista: false
});
  }
  //Cuando se preciona el componente para renderizar
      handlePress = () => {
         this.setState({ mostrarlista: !this.state.mostrarlista });
       }
  render() {
        const rederlista = this.state.mostrarlista ?
              <MPP handler={this.handler} /> :
              <MealPlanPicker icon='bed' label='Solo la habitacion' />;
    return (
      <View style={styles.HotelHabitacionesCard}>
            <View style={styles.habitaciones1}>
                  <View style={styles.habitaciones2}>
                        <Text style={styles.habitacionesTexto}>Habitaciones</Text>
                  </View>
                  <View style={styles.habitaciones2}>
                        <View style={styles.habitaciones3}>
                              <Icon name="users" size={24} color="#000000" />
                              <Text style={styles.habitacionesNum}>6</Text>
                        </View>
                        <View style={styles.habitaciones3}>
                              <Icon name="hotel" size={24} color="#000000" />
                              <Text style={styles.habitacionesNum}>2</Text>
                        </View>
                  </View>
            </View>
            <View style={styles.habitacionesTipo}>
                  <View style={styles.habitacionesTipo1}>
                        <View >
                              <Text style={styles.habitacionesSta}>Habitaciones Standard</Text>
                        </View>
                        <View style={styles.habitacionesTipo2}>
                              <Text style={styles.habitacionesCamas}>2 Personas</Text>
                              <Text style={styles.habitacionesCamas}>1 Cama doble</Text>
                        </View>
                  </View>
                  <View style={styles.habitacionesTipo1}>
                        <View >
                              <Text style={styles.habitacionesSta}>Habitaciones Standard</Text>
                        </View>
                        <View style={styles.habitacionesTipo2}>
                              <Text style={styles.habitacionesCamas}>4 Personas </Text>
                              <Text style={styles.habitacionesCamas}>| 1 Cama doble |</Text>
                              <Text style={styles.habitacionesCamas}>| 2 Cama simples |</Text>
                        </View>
                  </View>
            </View>
            <TouchableOpacity onPress={this.handlePress}>
                           {rederlista}
            </TouchableOpacity>
            <View style={styles.habitacionesCaracteristicas}>
                  <View style={styles.habitaciones2}>
                        <Text style={styles.precioHabitacion}>Precio por noche habitacion</Text>
                  </View>
                  <View style={styles.habitaciones2}>
                        <View style={styles.habitaciones3}>
                              <Text style={styles.precioFinal}>ARS</Text>
                              <Text style={styles.precioFinal2}> 3.298</Text>
                        </View>
                  </View>
            </View>
            <View style={styles.habitacionesCaracteristicas2}>
                  <Text style={styles.cambiar}>Cambiar</Text>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HotelHabitacionesCard: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    shadowColor: '#000000',
    shadowOpacity: 0.32,
    shadowOffset: {
      height: 0,
      width: -2
},
    elevation: 1,
    padding: 16,
    margin: 10,
    borderRadius: 3,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  habitaciones1: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        height: 48,
 },
 habitaciones2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderBottomColor: '#9B9B9B',
      flex: 1,
},
habitaciones3: {
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center',
     alignContent: 'center',
     flex: 1,
},
habitacionesTexto: {
    fontFamily: 'Roboto Regular',
    fontSize: 18,
    color: 'black',
    lineHeight: 16,
},
habitacionesNum: {
    fontFamily: 'Roboto Regular',
    fontSize: 14,
    color: '#335692',
    lineHeight: 16,
},
//Tipo de Habitaciones
habitacionesTipo: {
     flexDirection: 'column',
     borderBottomWidth: 0.5,
     borderBottomColor: '#9B9B9B',
     borderStyle: 'dotted',
      height: 128,
},
habitacionesTipo1: {
     flexDirection: 'column',
     justifyContent: 'space-around',
     height: 64,
},
habitacionesTipo2: {
     flexDirection: 'row',
},
habitacionesSta: {
    fontFamily: 'Roboto Regular',
    fontSize: 18,
    color: '#335692',
    lineHeight: 16,
},
habitacionesCamas: {
    fontFamily: 'Roboto Regular',
    fontSize: 14,
    color: 'gray',
    lineHeight: 16,
},
//Habitaciones Caracteristicas
habitacionesCaracteristicas: {
     flexDirection: 'row',
     justifyContent: 'space-between',

     borderBottomWidth: 0.5,
     borderBottomColor: '#9B9B9B',
     borderStyle: 'dotted',
     height: 48,
},
//Habitaciones Precio
habitacionesPrecio: {
     flexDirection: 'row',
     justifyContent: 'space-between',
},
precioHabitacion: {
    fontFamily: 'Roboto Regular',
    fontSize: 12,
    color: 'black',
    lineHeight: 16,
},
precioFinal: {
    fontFamily: 'Roboto Light',
    fontSize: 20,
   color: 'rgba(0,0,0,0.87)',
    lineHeight: 24,
},
precioFinal2: {
    fontFamily: 'Roboto Medium',
    fontSize: 20,
   color: 'rgba(0,0,0,0.87)',
    lineHeight: 24,
    fontWeight: ('bold'),
},
//Cambiar Caracteristicas
habitacionesCaracteristicas2: {
     flexDirection: 'row',
     justifyContent: 'flex-end',
     alignItems: 'center',

     borderBottomWidth: 0.5,
     borderBottomColor: '#9B9B9B',
     borderStyle: 'dotted',
     height: 48,
},
cambiar: {
    fontFamily: 'Roboto Medium',
    fontSize: 16,
   color: '#DF6800',
    lineHeight: 16,
    fontWeight: ('bold'),
},
});


//Para exportar
export default HotelHabitaciones;
