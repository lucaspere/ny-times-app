import React from 'react';
import { FlatList, View, ImageBackground, Text, StyleSheet } from 'react-native';

import { data } from '../../database/data'

import Article from './Article';

const ArticleList = () => {

   const keyExtractor = ({ id }) => id.toString();

   const renderItem = ({ item: { id, section, subsection, title, byline, multimedia } }) => {
      return (
         <Article
            title={title}
            section={section}
            subsection={subsection}
            byline={byline}
            image={{
               uri: multimedia[0].url
            }}
         />

      )
   }
   return (
      <FlatList
         data={data}
         renderItem={renderItem}
         keyExtractor={keyExtractor}
      />
   )
}



export default ArticleList