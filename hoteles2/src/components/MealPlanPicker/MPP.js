/**
 * Compontente de MPP seria una especie de lista donde contendria
 * a las diferentes opciones que el hotel ofrece para el cliente.
 * No puedo llevar a cabo la carga de los datos de la lista dinamica que recibe
 * dejo comentado las diferentes formas que intente implementar para poder realizarlo
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';

import MealPlanPicker from './MealPlanPicker';

const meal = [
     { id: 1, icon: 'room', label: 'Solo la habitacion' },
     { id: 2, icon: 'breakfast', label: 'Desayuno' }
];
class MPP extends Component {
  render() {
//const dobles = (...meal2) => meal.map(number => number * 2);

// const mealReformattedArray = meal.map(number =>
//       key={number.id},icon.
// );
 // const reformattedArray = meal.map(obj => {
 //    const rObj = {};
 //   rObj[obj.id] = { key: obj.id,
 //   names: <MealPlanPicker
 //   icon={'bed'}
 //   label={'meal.label'}
 //   />
 //   };
 //    return rObj;
 // });
 // const reformattedArray = meal.map(obj => {
 //    const rObj = {};
 //   rObj[obj.id] = { icon: obj.icon, label: obj.label };
 //    return rObj;
 // });
 const v1 = [];
      for (let j = 0; j < meal.length; j++) {
            const v2 = meal[j];

            v1.push(
                  { icon: v2.icon, label: v2.label }
                 );
      }
// var kvArray = [{clave:1, valor:10},
//                {clave:2, valor:20},
//                {clave:3, valor: 30}];
//
// var reformattedArray = kvArray.map(function(obj){
//    var rObj = {};
//    rObj[obj.clave] = obj.valor;
//    return rObj;
// });

        const cant = [];
               for (let i = 0; i < v1.length; i++) {
                     //const icon2 = [meal[i]];
                     //const icon3 = meal[i].label;
            cant.push(
                  { key: i,
                  names: <MealPlanPicker
                  icon={v1.icon}
                  label={v1.label}

                  />
                   }
                 );
              }
    return (
            <View style={styles.MPPCard}>
                  <FlatList
                          data={cant}
                          renderItem={({ item }) => <View>{item.names}</View>}
                          keyExtractor={(item, index) => index}
                          onClick={this.props.handler}
                  />
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
    margin: 10,
    borderRadius: 3,
    justifyContent: 'space-between',
    alignContent: 'center',
  },

});


//Para exportar
export default MPP;
