import React, { useState, useEffect } from 'react';
import {
   SafeAreaView,
   ActivityIndicator,
   StyleSheet,
   View,
} from 'react-native';

import ArticleList from './ArticleList';

const Feed = ({ category, articles }) => {

   if (false) {
      return (
         <View style={styles.containerFeed}>
            <ActivityIndicator color='#fff' size="large" />
         </View>
      )
   }

   return (
      <SafeAreaView style={styles.containerFeed}>
         <ArticleList category={category} articles={articles} />
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