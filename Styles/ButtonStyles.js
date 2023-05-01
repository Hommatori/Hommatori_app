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
            width: 100,
            borderColor: 'black',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          },
          buttonText: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
          },
          buttonDelete:{
            alignItems: 'center',
            paddingVertical: 12,
            borderRadius: 5,
            elevation: 10,
            backgroundColor: '#25db55',
            width: 100,
            marginTop: 10,
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