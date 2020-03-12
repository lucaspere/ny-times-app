import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

const Technology = (props) => {
   console.log(props)
   return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text >Oi</Text>
   </View>
   )}
const RootStacks = () => {

   return (
      <NavigationContainer>
         <Navigator>
            <Screen name="TECHNOLOGY" component={Technology}></Screen>
         </Navigator>
      </NavigationContainer>
   )
}

export default RootStacks;