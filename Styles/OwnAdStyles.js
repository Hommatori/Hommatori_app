import {StyleSheet, Platform} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#FFFFFF',
        },
        container2: {
            flex: 1,
            margin: 10,              
        },
          adContainer: {
            flex: 1,
            flexDirection: 'column',
            borderColor: '#25db55',
            borderWidth: 3,
            borderRadius: 15,
            marginBottom: 3,
            zIndex: 10,     
          },
          descriptionContainer1: {
              flex: 1,
              margin: 5,     
              flexDirection: 'column',
              borderColor: '#25db55',
              borderWidth: 3,
              borderRadius: 15,
              marginBottom: 3,
              zIndex: 10,     
          },
          descriptionContainer2: {
            flex: 1,
            flexDirection: 'column',  
            margin: 5, 
          },
          descriptionContainer3: {
            flexDirection:  'column',
            margin: 5, 
          },
          image: {
            marginTop: 5,
            height: 200,
            width: 200,
            backgroundColor: '#25db55',
            borderRadius: 15,
          },
          headerTextStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
          },
          AdHeaderTextStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            marginBottom: 10,
          },
  });