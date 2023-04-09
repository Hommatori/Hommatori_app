import {StyleSheet, Platform} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
        
        header: {
          alignItems: 'center',
          height: 70,
          backgroundColor: '#25db55',
          padding: 15,
          borderRadius: 5,
          elevation: 10,
        },
        headerText: {
          marginTop: 25,
          fontSize: 16,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
        },
  });