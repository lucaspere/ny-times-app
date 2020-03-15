import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

export const InfoRow = ({ section, byline, publishedAt }) => {

   const formmatedDate = dayjs(publishedAt).format("llll");

   return (
      <View style={styles.containerFeed}>
         <View style={styles.authorContainer}>
            <Text numberOfLines={1} style={styles.byline}>{byline}</Text>
         </View>
         <View style={styles.articleInfo}>
            <Text style={styles.section}>{section}</Text>
            <Text style={styles.published_date}>{formmatedDate}</Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   containerFeed: {
      height: 50,
      flexDirection: 'column',
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      backgroundColor: '#051C2D',
   },
   section: {
      fontSize: 16,
      color: 'white'
   },
   articleInfo: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: 5,
   },
   byline: {
      textAlign: 'center',
      fontSize: 16,
      color: 'white'
   },
   published_date: {
      fontSize: 16,
      color: 'white'
   },

});

export default InfoRow;