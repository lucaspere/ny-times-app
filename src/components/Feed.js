import React, { useState, useEffect } from 'react';
import {
   SafeAreaView,
   ActivityIndicator,
   StyleSheet,
   View,
   Text,
   TouchableOpacity
} from 'react-native';

import ArticleList from './ArticleList';

const Feed = ({ route, navigation, loading, error, articles}) => {

   if (loading) {
      return (
         <SafeAreaView style={styles.container}>
            <ActivityIndicator color='#fff' size="large" />
         </SafeAreaView>
      )
   }

   if (error.isError) {
      return (
         <SafeAreaView style={styles.errorContainer}>
            <View style={styles.errorMessageContainer}>
               <Text style={styles.errorMessage}>{error.errorMessage}</Text>
            </View>
            <TouchableOpacity
               style={styles.erroBotton}
               onPress={() => navigation.jumpTo(route.name, { name: "erroScreen" })}
            >
               <Text style={styles.buttonMessage}>Tentar novamente</Text>
            </TouchableOpacity>

         </SafeAreaView>
      )
   }

   return (
      <SafeAreaView style={styles.container}>
         <ArticleList articles={articles}
            category={route.name.toLowerCase()} />
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 1,
      backgroundColor: "rgba(5,28,45,0.65)"
   },
   errorContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#EBE771'
   },
   errorMessageContainer: {
      backgroundColor: 'red',
      height: 40,
      marginTop: 40,
      margin: 15

   },
   errorMessage: {
      fontSize: 28,
      color: '#051C2D',
      fontWeight: 'bold'
   },
   erroBotton: {
      backgroundColor: 'white',
      width: 150,
      height: 50,
      alignItems: 'center',
      padding: 10,
      borderRadius: 1,
      borderBottomColor: 'red',
      borderBottomWidth: 4,
      borderRightColor: 'red',
      borderRightWidth: 2,
   },
   buttonMessage: {
      fontSize: 15,
      fontWeight: 'bold'
   }
});

export default Feed;