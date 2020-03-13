import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, ActivityIndicator } from 'react-native';

import Feed from '../components/Feed';
import { fetchScienceArticles } from '../utils/api';

const Sciences = (props) => {

   const [articles, setArticles] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState({ isError: false, errorMessage: '' });

   useEffect(() => {
      const abortController = new AbortController();
      const signal = abortController.signal;

      fetchScienceArticles(setLoading, setArticles, setError, signal);

      return () => abortController.abort();
   }, [loading], [articles], [error]);

   return (
      <Feed
         route={props.route}
         navigation={props.navigation}
         articles={articles}
         loading={loading}
         error={error}
      />
   )
}

export default Sciences;