import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';

class MealPlanPicker extends Component {
      abrir() {

      }
  render() {
      return (
             <View style={styles.MealPlanPickerCard}>
                  <View style={styles.izq}>
                  <Icon name={this.props.icon} size={30} color="#000000" />
                  <Text> {this.props.label}</Text>
                  </View>
                   <Icon2 name="ios-arrow-down" size={30} color="#000000" />
              </View>
              /* <TouchableOpacity >
              // <Icon2 name="ios-arrow-down" size={30} color="#000000" />
              //</TouchableOpacity>*/
        );
          }
    }

//Etiquetas de Estilos
const styles = StyleSheet.create({
  MealPlanPickerCard: {
    margin: 5,
    flexDirection: 'row',
    elevation: 1,
    height: 48,
    width: null,
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    alignItems: 'center',
  },
  izq: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
});


//Para exportar
export default MealPlanPicker;
