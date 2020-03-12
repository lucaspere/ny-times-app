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

const Feed = () => {
console.log("oi")
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(false);
   const [articles, setArticles] = useState([])

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