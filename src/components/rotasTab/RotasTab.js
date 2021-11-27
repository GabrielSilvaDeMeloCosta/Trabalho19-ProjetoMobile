import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/SobreNós';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const RotasTab = () => {
    return(
        <Tab.Navigator 
        tabBarOptions={ {labelStyle: { fontSize: 24 },
                        style: {backgroundColor: '#14417b'},
                        activeTintColor: '#FFFFFF'} }
        >
        <Tab.Screen name="Inicial" component={RotasDrawer} />
        <Tab.Screen name="Sobre Nós" component={Perfil} />
        </Tab.Navigator>
    );
}

export default RotasTab