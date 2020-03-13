import React from 'react';
import { View } from 'react-native';

import ScienceFeed from '../components/ScienceFeed';
import ModalLayout from '../components/ModalLayout';

const Sciences = (props) => {

   return (
      <View style={{ flex: 1 }}>
         <ScienceFeed
            route={props.route}
         />
      </View>
   )
}



export default Sciences;