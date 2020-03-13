import React from 'react';
import { Modal, View } from 'react-native';
import { connect } from 'react-redux';

import { setModal } from '../redux/actions/articleActions';
import ScienceFeed from '../components/ScienceFeed';
import ModalLayout from '../components/ModalLayout';

const Sciences = (props) => {

   return (
      <View style={{ flex: 1 }}>
         <ScienceFeed
            route={props.route}
            navigation={props.navigation}
         />
         <Modal
            visible={props.showModal}
            animationType="slide"
            onRequestClose={() => props.dispatch(setModal())}
         >
            <ModalLayout />
         </Modal>
      </View>
   )
}



export default connect(({ showModal, title, abstract }) => ({ showModal, title, abstract }))(Sciences);