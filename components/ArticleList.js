import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';


const ArticleList = () => {
   const data = {
      "section": "technology",
      "subsection": "personaltech",
      "published_date": "11.mar.2020 às 14:00",
      "byline": "Brian X. Chen",

   }

   return (
      <View style={styles.containerFeed}>
         <View style={styles.sections}>
            <Text style={styles.section}>{data.section}</Text>
            <Text style={styles.subsection}>{data.subsection}</Text>
         </View>
         <View style={styles.articleInfo}>
            <Text style={styles.byline}>Por {data.byline}</Text>
            <Text style={styles.published_date}>{data.published_date}</Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   containerFeed: {
      height: 50,
      flexDirection: 'row',
      paddingHorizontal: 10,

      justifyContent: 'space-between',
      backgroundColor: '#051C2D',
   },
   sections: {
      marginLeft: 5,
      flexDirection: 'column',
      justifyContent: 'space-around',
   },
   section: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
   },
   subsection: {
      fontSize: 14,
      color: 'white'
   },
   articleInfo: {
      flexDirection: 'column',
      justifyContent: 'space-around',
   },
   byline: {
      fontSize: 18,
      color: 'white'
   },
   published_date: {
      fontSize: 14,
      color: 'white'
   },

});

export default ArticleList;