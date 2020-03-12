import React from 'react';
import { StyleSheet, View } from 'react-native';

import Feed from '../components/Feed';


const Technology = (props) => {

   return (
      <View style={styles.container}>
         <Feed category="technology" />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
   },
});

export default Technology;