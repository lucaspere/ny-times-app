import React, { useState, useEffect } from 'react';
import {
   SafeAreaView,
   ActivityIndicator,
   StyleSheet,
   View,
} from 'react-native';

import ArticleList from './ArticleList';

import { fetchArticles } from '../utils/api';

const Feed = () => {

   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(false);
   const [articles, setArticles] = useState([])

   useEffect(() => {
      const abortController = new AbortController();

      const signal = abortController.signal;

      fetchArticles('technology', setArticles, setIsLoading, signal);

      return () => abortController.abort();
   }, [articles]);

   if (isLoading) {
      return (
         <View style={[styles.containerFeed, { marginTop: 20 }]}>
            <ActivityIndicator color='#fff' size="large" />
         </View>
      )
   }
   return (
      <SafeAreaView style={styles.containerFeed}>
         <ArticleList articles={articles} />
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