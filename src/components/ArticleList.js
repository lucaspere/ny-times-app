import React from 'react';
import { FlatList, View, ImageBackground, Text, StyleSheet } from 'react-native';


import Article from './Article';

const ArticleList = ({ category, articles }) => {

   const keyExtractor = ({ uri }) => {

      const idPost = uri.match(/([\w|\d]+)-([\w|\d]+)-([\w|\d]+)-([\w|\d]+)-([\w|\d]+)/g);

      return idPost.toString();
   }
   const renderItem = ({ item: { id, section, subsection, title, byline, multimedia } }) => {

         return (
            <Article
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

   const filteredArticles = articles.filter(article => article.section === category);
   
   return (
      <FlatList
         data={filteredArticles}
         renderItem={renderItem}
         keyExtractor={keyExtractor}
      />
   )
}



export default ArticleList