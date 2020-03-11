import React, { useState, useEffect } from 'react';
import {
   SafeAreaView,
   ActivityIndicator,
   Text,
   ViewPropTypes,
   StyleSheet,
   View,
   ImageBackground
} from 'react-native';

import ArticleList from './ArticleList';
import { data } from '../database/data'

const Feed = () => {

   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(false);
   const [articles, setArticles] = useState([])


   const uri = data[1].multimedia[0].url
   if (isLoading) {
      return <ActivityIndicator styles={{ marginTop: 20 }} size="large" />
   }
   return (
      <SafeAreaView style={styles.containerFeed}>
         <View style={{borderTopColor: 'black', borderTopWidth: 1}}>
            <ArticleList articles={articles} />
            <ImageBackground
               source={{ uri }}
               style={styles.imageContainer}
               imageStyle={StyleSheet.absoluteFill}
            >
               <View>
                  <Text style={styles.title}>{data[0].title}</Text>
               </View>
            </ImageBackground>
         </View>
         <View style={{borderTopColor: 'white', borderTopWidth: 1}}>
            <ArticleList articles={articles} />
            <ImageBackground
               source={{ uri }}
               style={styles.imageContainer}
               imageStyle={StyleSheet.absoluteFill}
            >
               <View>
                  <Text style={styles.title}>{data[0].title}</Text>
               </View>
            </ImageBackground>
         </View>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   containerFeed: {
      flex: 1,
      marginTop: 1,
   },
   imageContainer: {
      width: 'auto',
      height: 250,
      justifyContent: 'flex-end'
   },
   title: {
      color: "#fff",
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: 'rgba(0,0,0,0.35)'
   }
});

export default Feed;