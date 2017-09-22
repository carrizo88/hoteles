/**
 * Lista de los hoteles
 */
import React, { Component } from 'react';
import {
  ListView,
  TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import HotelCard from './HotelCard';

class HotelesLista extends Component {
      //Constructor que recibe los props
      constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
          dataSource: ds.cloneWithRows(this.props.hoteles),
        };
  }
  handlePress(hotel) {
        Actions.hotelesDetalles({ hotel });
 }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(hotel) => (
             <TouchableOpacity
                  onPress={() => this.handlePress(hotel)}
             >
                  <HotelCard hotel={hotel} />
             </TouchableOpacity>
       )
       }
      />
    );
  }
}
export default HotelesLista;
