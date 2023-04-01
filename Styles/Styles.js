import {StyleSheet, Platform} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
        },
        rowContainer: {
           
            flexDirection: 'row',
            marginTop: 5,
            marginBottom: 5,
            borderColor: '#25db55',
            borderWidth: 3,
            borderRadius: 15,
            width: '100%',
        },
        rowText: {
            fontSize: 20,
            marginLeft: 5,
          },
          searcBoxContainer: {
            backgroundColor: '#25db55',
            marginTop: 15,
            marginBottom: 15,
            padding: 30,
            borderRadius: 15,
            width: '90%',
            elevation: 10,
          },
          textInputContainer1: {
            backgroundColor: '#FFFFFF',
            margin: 10,
            borderRadius: 10,
            width: 220,
          },
          textInputContainer2: {
            backgroundColor: '#FFFFFF',
            margin: 10,
            borderRadius: 10,
            width: 100,
          },
          searchButtonContainer:{        
            flexDirection: 'row',
          },
   
  });