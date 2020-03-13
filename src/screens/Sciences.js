import React from 'react';
import { Modal, Text, View } from 'react-native';
import {connect} from 'react-redux';

import {setModal} from '../redux/actions/articleActions';
import ScienceFeed from '../components/ScienceFeed';

const Sciences = (props) => {

   return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
         <ScienceFeed
            route={props.route}
            navigation={props.navigation}
         />
         <Modal
            visible={!props.showModal}
            animationType="slide"
            onRequestClose={() => props.dispatch(setModal())}
         >
            <Text>{props.title}</Text>
            <Text>{props.abstract}</Text>
         </Modal>
      </View>
   )
}

export default connect(({ showModal, title, abstract }) => ({ showModal, title, abstract  }))(Sciences);