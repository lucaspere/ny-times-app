import React from 'react';
import { FlatList, View, ImageBackground, Text, StyleSheet } from 'react-native';

import {getKey} from '../utils/getKey';
import Article from './Article';

const ArticleList = ({ category, articles }) => {

   const keyExtractor = ({ uri }) => {

      const idPost = uri.match(/([\w|\d]+)-([\w|\d]+)-([\w|\d]+)-([\w|\d]+)-([\w|\d]+)/g);

      return idPost.toString();
   }
   const renderItem = ({ item}) => {

      if (item.section === category) {
         return (
            <Article
               abstract={item.abstract}
               date={item.published_date}
               title={item.title}
               section={item.section}
               byline={item.byline}
               image={
                  item.multimedia ? { uri: item.multimedia[0].url }
                     : require('../../assets/no-image-available.png')
               }
            />
         )
      }
   }

   return (
      <FlatList
         data={articles}
         renderItem={renderItem}
         keyExtractor={keyExtractor}
      />
   )
}



export default ArticleList