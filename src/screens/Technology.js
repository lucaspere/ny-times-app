import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import Feed from '../components/Feed';
import { fetchTechnologyArticles } from '../utils/api';

const Technology = (props) => {

   const [articles, setArticles] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState({ isError: false, errorMessage: 'Falha ao buscar artigos' });

   useEffect(() => {
      const abortController = new AbortController();
      const signal = abortController.signal;

      fetchTechnologyArticles(setLoading, setArticles, setError, "technology", signal);

      return () => abortController.abort();
   }, [loading], [articles], [error]);

console.log(props)
   return (
      <Feed
         route={props.route}
         navigation={props.navigation}
         articles={articles}
         loading={loading}
         error={error} />
   )
}




export default Technology;