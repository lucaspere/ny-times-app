import React from 'react';
import { FlatList, View, ImageBackground, Text, StyleSheet } from 'react-native';


import Article from './Article';

const ArticleList = ({ category, articles }) => {

   const keyExtractor = ({ uri }) => {

      const idPost = uri.match(/([\w|\d]+)-([\w|\d]+)-([\w|\d]+)-([\w|\d]+)-([\w|\d]+)/g);

      return idPost.toString();
   }
   const renderItem = ({ item: { published_date: date, section, subsection, title, byline, multimedia } }) => {

      if (section === category) {
         return (
            <Article
               date={date}
               title={title}
               section={section}
               subsection={subsection}
               byline={byline}
               image={
                  multimedia ? { uri: multimedia[0].url }
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