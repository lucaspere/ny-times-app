import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { articleStyle as styles} from '../styles/articleStyle';
import { setModal, setAbstract } from '../redux/actions/articleActions';

import InfoRow from './InfoRow';

const Article = (props) => {

   const [loading, setLoading] = useState(true);

   const { setAbstractValue, setModalValue } = props;

   const { title, image, section, byline, date, abstract } = props;

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
                  setAbstractValue(title, abstract);
               }}
            >
               <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
         </ImageBackground>
      </View>
   )
}

const mapStateToProps = ({ showModal }) => ({ showModal });
const mapDispatchTopProps = (dispatch) => ({
   setModalValue: () => dispatch(setModal()),
   setAbstractValue: (title, abstract) => dispatch(setAbstract(title, abstract))
})
export default connect(mapStateToProps, mapDispatchTopProps)(Article);