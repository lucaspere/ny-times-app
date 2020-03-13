import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Constants from 'expo-constants';
import { setModal } from '../redux/actions/articleActions';

const ModalLayout = ({ title, abstract, showModal }) => {

   const TouchableOpacityStyle = {
      width: 80,
      height: 40,
      borderColor: '#fff',
      borderWidth: 2,
   }

   return (
      <View style={styles.modalContainer}>
         <View style={styles.backBotton}>
            <TouchableOpacity
               onPress={() => showModal()}
               style={TouchableOpacityStyle}
            >

               <Text style={styles.textBotton}>Voltar</Text>
            </TouchableOpacity>
         </View>

         <View style={styles.bodyText}>
            <View style={{ marginTop: 20 }}>
               <Text style={styles.modalTitle}>{title}</Text>
            </View>
            <View style={{ marginTop: 10 }}>
               <Text style={styles.modalAbstract}>{abstract}</Text>
            </View>
         </View>
      </View >
   )
}

const styles = StyleSheet.create({
   modalContainer: {
      flex: 1,
      backgroundColor: '#051C2D'
   },
   modalTitle: {
      fontSize: 40,
      color: "#051C2D",
      fontWeight: 'bold'
   },
   modalAbstract: {
      fontSize: 20,
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

const mapStateToProps = ({ title, abstract }) => ({
   title,
   abstract
});

const mapDispatchTopProps = (dispatch) => ({
   showModal: () => dispatch(setModal())
});

export default connect(mapStateToProps, mapDispatchTopProps)(ModalLayout)