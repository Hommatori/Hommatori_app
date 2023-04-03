import {StyleSheet, Platform} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
        
        header: {
          alignItems: 'center',
          height: 50,
          backgroundColor: '#25db55',
          padding: 15,
          borderRadius: 5,
          elevation: 10,
        },
        headerText: {
          fontSize: 16,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
        },
  });