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
         <ArticleList />
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   containerFeed: {
      flex: 1,
      marginTop: 1,
      backgroundColor: "rgba(5,28,45,0.65)"
   },
});

export default Feed;