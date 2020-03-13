import React from 'react';
import { View } from 'react-native';

import TechnologyFeed from '../components/TechnologyFeed';
import ModalLayout from '../components/ModalLayout';

const Technology = (props) => {

   return (
      <View style={{ flex: 1 }}>
         <TechnologyFeed
            route={props.route}
            navigation={props.navigation}
         />
         <ModalLayout />
      </View>

   )
}

export default Technology;