/**
 * Compontente de MealPlanPicker
 * El cual recibe una Lista dinamica
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';


class MealPlanPicker extends Component {

      constructor(props) {
    super(props);
    //para poder cambiar el estado desde el render necesito hacer esto
     this.handleClickDesplegar = this.handleClickDesplegar.bind(this);
     this.handleClickPlegar = this.handleClickPlegar.bind(this);
    // se setea el estado inicial
    this.state = {
        mostrarlista: true,
        selectedId: this.props.selectedId,
        icon: 'hotel',
        label: 'Solo la habitacion',
        datos: this.props.lista
    };
}

      handleClickDesplegar() {
            this.setState({ mostrarlista: false });
      }
      handleClickPlegar(props) {
            this.setState({
                  mostrarlista: true,
                  selectedId: props.id,
                  icon: props.icon,
                  label: props.label,
            });
      }

  render() {
        //Defino el estado inicial de la lista y luego renderizo una variable dependiendo del estado
        const lista1 = this.state.mostrarlista;
        let listar = null;
        if (lista1) {
             listar = (
                   <View style={styles.MealPlanPickerCard}>
                        <View style={styles.izq}>
                        <Icon name={this.state.icon} size={30} color="#000000" />
                        <Text> {this.state.label}</Text>
                        </View>
                        <TouchableOpacity onPress={this.handleClickDesplegar} >
                              <Icon2 name="ios-arrow-down" size={30} color="#000000" />
                  </TouchableOpacity>
                  </View>
             );
      } else {
            const listar2 = [];
                   for (let i = 0; i < 4; i++) {
                        const listar3 = this.state.datos[i];
                        if (listar3.id === this.state.selectedId) {
                              listar2.push(
                                     <View key={i} >
                                     <TouchableOpacity
                                     onPress={this.handleClickPlegar.bind(this, listar3)}
                                     >
                                          <View style={styles.MealPlanPickerCard}>
                                                <View style={styles.izq}>
                                                <Icon
                                                name={listar3.icon} size={30}
                                                color="#000000"
                                                />
                                                <Text> {listar3.label}</Text>
                                                </View>
                                                <Icon2
                                                name="ios-checkmark-circle"
                                                size={30} color="#DF6800"
                                                />
                                          </View>
                                          </TouchableOpacity>
                                     </View>
                                   );
                        } else {
                              listar2.push(
                                     <View key={i} >
                                     <TouchableOpacity
                                     onPress={this.handleClickPlegar.bind(this, listar3)}
                                     >
                                          <View style={styles.MealPlanPickerCard}>
                                                <View style={styles.izq}>
                                                <Icon
                                                name={listar3.icon}
                                                size={30} color="#000000"
                                                />
                                                <Text> {listar3.label}</Text>
                                                </View>
                                         </View>
                                         </TouchableOpacity>
                                         </View>
                                     );
                        }
                  }
                  listar = listar2;
      }
    return (
            <View>
                  {listar}
            </View>
    );
  }
}

//Etiquetas de Estilos
const styles = StyleSheet.create({
  MPPCard: {
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
    margin: 5,
    borderRadius: 3,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
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
