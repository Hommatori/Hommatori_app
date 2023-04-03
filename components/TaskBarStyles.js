import {StyleSheet, Platform} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

          buttonContainer: {
            flexDirection: 'row',
            paddingTop: 5,
          },
          button: {  
            alignItems: 'center',
            flex: 1,
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
  });