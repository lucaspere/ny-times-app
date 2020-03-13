import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const { Navigator, Screen } = createMaterialTopTabNavigator();


import Technology from '../screens/Technology';
import Sciences from '../screens/Sciences';


const RootStacks = () => {

   const navigatorConfig = {
      activeTintColor: '#fff',
      labelStyle: { fontSize: 15 },
      style: { backgroundColor: '#051C2D' },
      indicatorStyle: { backgroundColor: 'white' },
      tabStyle: { marginTop: 20 }
   }

   return (
      <NavigationContainer>
         <StatusBar showHideTransition='slide' />
         <Navigator
            lazy={true}
            tabBarOptions={navigatorConfig}
         >
            <Screen name="Technology" component={Technology}></Screen>
            <Screen name="Science" component={Sciences}></Screen>
         </Navigator>
      </NavigationContainer>
   )
}

export default RootStacks;