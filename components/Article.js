import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet, ImageBackground, Text } from 'react-native';

import InfoRow from './InfoRow';

const Article = ({ title, image, section, subsection, byline }) => {

   const [loading, setLoading] = useState(true);

   return (
      <View style={styles.articleContainer}>
         <InfoRow
            section={section}
            subsection={subsection}
            byline={byline} />
         <ActivityIndicator
            style={StyleSheet.absoluteFill}
            animating={loading}
            size="large"
            color="#051C2D"
         />
         <ImageBackground
            source={image}
            style={styles.imageContainer}
            imageStyle={StyleSheet.absoluteFill}
            onLoad={() => setLoading(false)}
         >
            <View>
               <Text style={styles.title}>{title}</Text>
            </View>
         </ImageBackground>
      </View>
   )
}

const styles = StyleSheet.create({
   articleContainer: {
      marginVertical: 2,
      shadowColor: "#fff",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
   },
   imageContainer: {
      width: 'auto',
      height: 250,
      justifyContent: 'flex-end'
   },
   title: {
      color: "#fff",
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: 'rgba(0,0,0,0.35)'
   }
});


export default Article;