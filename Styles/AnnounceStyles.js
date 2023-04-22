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
        radioButton: {
          flexDirection: 'row',        
          justifyContent: 'space-around',         
        },
          textInputContainer1: {
            backgroundColor: '#dadee6',
            padding: 7,
            borderRadius: 10,

          },
          textInputContainer2: {
            flex: 1,
            backgroundColor: '#dadee6',
            borderRadius: 10,
            padding: 7,
          },
          modal: {
            marginTop: 300,
            padding:20,
            backgroundColor: '#fafafa',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#333',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
          close: {
            marginTop: 50,
            color: '#333',
            fontWeight: 'bold',
          }
   
  });