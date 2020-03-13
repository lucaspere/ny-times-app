import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const { Navigator, Screen } = createMaterialTopTabNavigator();
import Constants from 'expo-constants'

import Technology from '../screens/Technology';
import Sciences from '../screens/Sciences';


const RootStacks = () => {

   const navigatorConfig = {
      activeTintColor: '#fff',
      labelStyle: { fontSize: 15 },
      style: { backgroundColor: '#051C2D' },
      indicatorStyle: { backgroundColor: 'white' },
      tabStyle: { marginTop: Constants.statusBarHeight }
   }

   return (
      <NavigationContainer>
         <StatusBar showHideTransition='slide' />
         <Navigator
            lazy={true}
            tabBarOptions={navigatorConfig}
         >
            <Screen
               name="Technology"
               component={Technology}
               options={{
                  tabBarLabel: "Tecnologia"
               }}
            />
            <Screen
               name="Science"
               component={Sciences}
               options={{
                  tabBarLabel: "Ciências"
               }}
            />
         </Navigator>
      </NavigationContainer>
   )
}

export default RootStacks;