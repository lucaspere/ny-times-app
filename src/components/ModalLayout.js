import React from 'react';
import { Modal, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { closeModal } from '../redux/actions/articleActions';
import { Linking } from 'expo';

export const ModalLayout = ({ title, abstract, link, closeModal, isOpen }) => {

   const TouchableOpacityStyle = {
      width: 80,
      height: 40,
      borderColor: '#fff',
      borderWidth: 2,
   }

   return (
      <Modal
         visible={isOpen}
         animationType="slide"
         onRequestClose={() => closeModal()}
      >
         <View style={styles.modalContainer}>
            <View style={styles.backBotton}>
               <TouchableOpacity
                  onPress={() => closeModal()}
                  style={TouchableOpacityStyle}
               >
                  <Text style={styles.textBotton}>Voltar</Text>
               </TouchableOpacity>
            </View>

            <View style={styles.bodyText}>
               <View style={{ marginTop: 20 }}>
                  <Text style={styles.modalTitle}>{title}</Text>
               </View>
               <View style={{ marginTop: 20 }}>
                  <Text
                     numberOfLines={1}
                     ellipsizeMode="tail"
                     style={styles.modalLink}
                     onPress={() => Linking.openURL(link)}>
                     {link}
                  </Text>
               </View>
               <View style={{ marginTop: 10 }}>
                  <Text style={styles.modalAbstract}>{abstract}</Text>
               </View>
            </View>
         </View >
      </Modal>
   )
}

const styles = StyleSheet.create({
   modalContainer: {
      flex: 1,
      backgroundColor: '#051C2D'
   },
   modalTitle: {
      fontSize: 30,
      color: "#051C2D",
      fontWeight: 'bold'
   },
   modalLink: {
      fontSize: 15,
      color: '#cc1235',
      textDecorationLine: 'underline',
   },
   modalAbstract: {
      fontSize: 18,
      color: "rgba(5,28,45,0.9)"
   },
   backBotton: {
      marginTop: 10,
      marginHorizontal: 15,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'yellow',
      height: 50
   },
   textBotton: {
      marginTop: 3.5,
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
   },
   bodyText: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 10,
   }
});

const mapStateToProps = ({ title, abstract, link, showModal }) => ({
   title,
   abstract,
   link,
   isOpen: showModal
});

const mapDispatchTopProps = (dispatch) => ({
   closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchTopProps)(ModalLayout)