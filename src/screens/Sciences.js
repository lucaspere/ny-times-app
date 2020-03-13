import React from 'react';
import { View } from 'react-native';

import ScienceFeed from '../components/ScienceFeed';
import ModalLayout from '../components/ModalLayout';

const Sciences = (props) => {

   return (
      <View style={{ flex: 1 }}>
         <ScienceFeed
            route={props.route}
            navigation={props.navigation}
         />
         <ModalLayout />
      </View>
   )
}



export default Sciences;