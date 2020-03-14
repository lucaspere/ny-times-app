import React, { useState, useEffect } from 'react';
import {
   SafeAreaView,
   ActivityIndicator,
   StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { addTechonologiesArticles } from '../redux/actions/articleActions';

import { fetchTechnologyArticles } from '../utils/api';

import ArticleList from './ArticleList';


const TechnologyFeed = ({ technologiesArticles, route, addArticles }) => {

   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const abortController = new AbortController();
      const signal = abortController.signal;

      fetchTechnologyArticles(signal, (err, articles) => {
         if (err) {
            return console.log(err.message)
         }
         addArticles(articles);
         setLoading(false)
      });

      return () => abortController.abort();
   }, [loading], [technologiesArticles]);

   if (loading) {
      return (
         <SafeAreaView style={styles.container}>
            <ActivityIndicator color='#fff' size="large" />
         </SafeAreaView>
      )
   }

   return (
      <SafeAreaView style={styles.container}>
         <ArticleList articles={technologiesArticles}
            category={route.name.toLowerCase()} />
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

const mapStateToProps = ({ technologiesArticles }) => ({ technologiesArticles });
const mapDispatchToProps = (dispatch) => ({
   addArticles: (articles) => dispatch(addTechonologiesArticles(articles))
});

export default connect(mapStateToProps, mapDispatchToProps)(TechnologyFeed);