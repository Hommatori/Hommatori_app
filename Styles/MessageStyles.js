import {StyleSheet, Platform} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

        container: {
          flex: 1,
          backgroundColor: '#FFFFFF',
        },
          property: {
            flex: 1,
            margin: 10,
        },
        property2: {
          alignItems: 'center',
          marginBottom: 10,
        },
        messageContainer: {
          flex: 1,
          flexDirection: 'column',
          borderColor: '#25db55',
          borderWidth: 3,
          borderRadius: 15,
          marginBottom: 3,
          zIndex: 10,
        },
        headerText: {
          fontSize: 30,
          fontWeight: 'bold',
        },
        textStyle: {
          fontSize: 15,
          fontWeight: 'bold',
          padding: 5,
        },
   
  });