import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const { Navigator, Screen } = createMaterialTopTabNavigator();

import Feed from '../components/Feed';
import Technology from '../screens/Technology';


const Science = (props) => {

   return (
      <View style={styles.container}>
         <Feed category="science" />
      </View>
   )
}

const RootStacks = () => {

   return (
      <NavigationContainer>
         <StatusBar showHideTransition='slide'/>
         <Navigator
            lazy={true}
            tabBarOptions={{
               activeTintColor: '#fff',
               labelStyle: { fontSize: 15 },
               style: { backgroundColor: '#051C2D' },
               indicatorStyle: {backgroundColor: 'white'},
               tabStyle: {marginTop: 20}
            }}
         >
            <Screen name="Technology" component={Technology}></Screen>
            <Screen name="Science" component={Science}></Screen>
         </Navigator>
      </NavigationContainer>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
   },
});

export default RootStacks;