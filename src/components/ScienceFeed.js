import React, { useState, useEffect } from 'react';
import {
   SafeAreaView,
   ActivityIndicator,
   StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import { addSciencesArticles } from '../redux/actions/articleActions';
import ArticleList from './ArticleList';
import { fetchScienceArticles } from '../utils/api';

export const ScienceFeed = ({ route, addArticles, sciencesArticles }) => {

   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const abortController = new AbortController();
      const signal = abortController.signal;

      fetchScienceArticles(signal, (err, articles) => {
         if (err) {
            return console.log(err.message)
         }
         addArticles(articles);
         setLoading(false)
      });
      return () => abortController.abort();
   }, [loading], [sciencesArticles]);

   if (loading) {
      return (
         <SafeAreaView style={styles.container}>
            <ActivityIndicator color='#fff' size="large" />
         </SafeAreaView>
      )
   }

   return (
      <SafeAreaView style={styles.container}>
         <ArticleList articles={sciencesArticles}
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

const mapStateToProps = ({ sciencesArticles }) => ({ sciencesArticles });
const mapDispatchToProps = (dispatch) => ({
   addArticles: (articles) => dispatch(addSciencesArticles(articles))
});

export default connect(mapStateToProps, mapDispatchToProps)(ScienceFeed);