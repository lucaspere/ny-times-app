import React, { useState, useEffect } from 'react';
import {
   SafeAreaView,
   ActivityIndicator,
   StyleSheet,
} from 'react-native';

import ArticleList from './ArticleList';
import { fetchScienceArticles } from '../utils/api';

const ScienceFeed = ({ route, navigation }) => {

   const [articles, setArticles] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const abortController = new AbortController();
      const signal = abortController.signal;

      fetchScienceArticles(setLoading, setArticles, signal);

      return () => abortController.abort();
   }, [loading], [articles]);

   if (loading) {
      return (
         <SafeAreaView style={styles.container}>
            <ActivityIndicator color='#fff' size="large" />
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
   }
});

export default ScienceFeed;