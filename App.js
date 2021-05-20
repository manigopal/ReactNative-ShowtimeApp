//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import BottomTab from './Navigation';

const reducer = ( state = { menu: 'closeMenu' }, action ) => {
    //return state;
    // if(action.type == 'OPENMENU'){
    //     return { 
    //         menu: 'openMenu'
    //     };
    // } else if(action.type == 'CLOSEMENU'){
    //     return { 
    //         menu: 'closeMenu'
    //     };
    // } 
    
    // using switch instead of IF statement
    switch(action.type){
        case "OPENMENU": 
            return { menu: 'openMenu' };
        case "CLOSEMENU":
            return { menu: 'closeMenu' };
        default:
            return state;
    }    
};

const database = createStore(reducer);

const App = () => (
    <Provider store={database}>
        {/* <HomeScreen /> */}
        <BottomTab />
    </Provider>
);


export default App;