/**
 * Android App
 */

//import React, { Component } from 'react';
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {} from 'react-native';
import HomeHoteles from './HomeHoteles';
import HotelesDetalles from './HotelesDetalles';
import NavBarHome from './components/NavBarHome';

class App extends Component {
render() {
   return (      //Router y Scene para la navegacion
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

export default App;
