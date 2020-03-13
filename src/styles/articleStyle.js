import {StyleSheet} from 'react-native';

export const articleStyle = StyleSheet.create({
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
