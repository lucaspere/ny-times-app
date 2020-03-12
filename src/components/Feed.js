import React, { useState, useEffect } from 'react';
import {
   SafeAreaView,
   ActivityIndicator,
   StyleSheet,
   View,
} from 'react-native';
import { connect } from 'react-redux';
import { getArticles } from '../redux/actions/articleActions';

import ArticleList from './ArticleList';

const Feed = ({ getArticles, articles, }) => {

   const [isFetching, setIsFetching] = useState(true);
   const [error, setError] = useState(false);


   useEffect(() => {
      const abortController = new AbortController();

      const signal = abortController.signal;

      getArticles('science', signal)

      return () => {
         abortController.abort();
         setIsFetching(false)
      }
   }, [articles, isFetching]);

   if (isFetching) {
      return (
         <View style={[styles.containerFeed, { marginTop: 20 }]}>
            <ActivityIndicator color='#fff' size="large" />
         </View>
      )
   }
   return (
      <SafeAreaView style={styles.containerFeed}>
         <ArticleList articles={articles.results} />
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

const mapStateToProps = ({ articles }) => ({ articles });

const mapDispatchToProps = (dispatch) => ({
   getArticles: (category, signal) => dispatch(getArticles(category, signal))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed);