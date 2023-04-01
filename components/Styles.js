import {StyleSheet, Platform} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
        },
        header: {
          width: '100%',
          height: 50,
          backgroundColor: '#25db55',
          alignItems: 'center',
           
          
        },
        rowContainer: {
            flex: 1,
            flexDirection: 'row',
            marginTop: 5,
            marginBottom: 5,
            borderColor: '#25db55',
            borderWidth: 3,
            borderRadius: 15,
            width: 340,
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
            width: 340,
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
          button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: '#25db55',
          },
          buttonText: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
          },
          buttonContainer: {
            
            flexDirection: 'row',
            paddingTop: 5,
          },
  });