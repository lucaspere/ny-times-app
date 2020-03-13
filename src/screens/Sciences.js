import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import Feed from '../components/Feed';
import {fetchArticles} from '../utils/api';

const Sciences = (props) => {

   const [articles, setArticles] = useState([]);

   useEffect(() => {
      const abortController = new AbortController();
      const signal = abortController.signal;

      fetchArticles("technology", setArticles, signal);

      return () => abortController.abort();
   });

   return (
      <View style={styles.container}>
         <Feed articles={articles}
            category="science" />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
   },
});

export default Sciences;