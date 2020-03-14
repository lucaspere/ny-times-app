import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { setAbstract, openModal } from '../redux/actions/articleActions';

import InfoRow from './InfoRow';

const Article = (props) => {

   const [loading, setLoading] = useState(true);

   const { setAbstractValue, setModalValue } = props;

   const { title, image, section, byline, date, abstract, link } = props;

   return (
      <View style={styles.articleContainer}>
         <InfoRow
            publishedAt={date}
            section={section}
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
            <TouchableOpacity
               onPress={() => {
                  setModalValue()
                  setAbstractValue(title, abstract, link);
               }}
            >
               <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
         </ImageBackground>
      </View>
   )
}

const styles = StyleSheet.create({
   articleContainer: {
      marginVertical: 2,
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

const mapStateToProps = ({ showModal }) => ({ showModal });
const mapDispatchTopProps = (dispatch) => ({
   setModalValue: () => dispatch(openModal()),
   setAbstractValue: (title, abstract, link) => dispatch(setAbstract(title, abstract, link))
})
export default connect(mapStateToProps, mapDispatchTopProps)(Article);