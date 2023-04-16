import {StyleSheet, Platform} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

          button: {  
            alignItems: 'center',
            marginTop: 10,
            paddingVertical: 12,
            borderRadius: 5,
            elevation: 10,
            backgroundColor: '#25db55',
          },
          buttonText: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
          },
          nextContainer: {
            flexDirection: 'row', 
            justifyContent: 'space-between',
            marginTop: 10,
          },
          buttonSearch:{
            alignItems: 'center',
         
            paddingVertical: 12,
            borderRadius: 5,
            elevation: 10,
            backgroundColor: '#25db55',
            width: 100
          },
          infoText: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
          },
          infoContainer: {    
            justifyContent: 'center',
          },

  });