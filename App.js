import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from './src/components/Feed';
const { Navigator, Screen } = createStackNavigator();


const Home = ({navigation}) => <Button title="Ir" onPress={() => navigation.navigate("Science")}/>

const App = () => {
  return (
    <View style={styles.container}>
      <Feed />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default App;
