/**
 * Android App
 */

//import React, { Component } from 'react';
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  AppRegistry,
} from 'react-native';

import HomeHoteles from './src/HomeHoteles';
import HotelesDetalles from './src/HotelesDetalles';
import NavBarHome from './src/components/NavBarHome';

export default class hoteles2 extends Component {
render() {
   return (
         //Router y Scene para la navegacion
     <Router>
      <Scene key="root">
         <Scene
         key="homeHoteles" component={HomeHoteles}
         title="HomeHoteles" navBar={NavBarHome}
         />
         <Scene
         key="hotelesDetalles" component={HotelesDetalles}
         title="HotelesDetalles" hideNavBar
         />
      </Scene>
     </Router>
   );
 }
}

AppRegistry.registerComponent('hoteles2', () => hoteles2);
