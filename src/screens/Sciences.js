import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, ActivityIndicator } from 'react-native';

import ArticleList from '../components/ArticleList';
import { fetchScienceArticles } from '../utils/api';

const Sciences = (props) => {

   const [articles, setArticles] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState({ isError: false, errorMessage: '' });

   useEffect(() => {
      const abortController = new AbortController();
      const signal = abortController.signal;

      fetchScienceArticles(setLoading, setArticles, setError, "science", signal);

      return () => abortController.abort();
   }, [loading], [articles], [error]);

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
            category="science" />
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 1,
      backgroundColor: "rgba(5,28,45,0.65)"
   },
});

export default Sciences;