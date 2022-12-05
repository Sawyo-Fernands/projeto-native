import React from "react";

import Home from "../../pages/home";
import About from "../../pages/about";
import VisualizarPontos from '../../pages/VisualizarPontos'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const {Navigator,Screen}=createNativeStackNavigator()

export default function(){
    return(
        <Navigator initialRouteName="Home" screenOptions={{
            headerShown:false
        }}>
            <Screen name="Home" component={Home}/>
            <Screen name="About" component={About}/>
            <Screen name="VisualizarPontos" component={VisualizarPontos}/>
        </Navigator>
    )
}