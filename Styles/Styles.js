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
          searchButtonContainer:{  
            flexDirection: 'row',
          },
          adContainer: {
            flex: 1,
            flexDirection: 'row',
            borderColor: '#25db55',
            borderWidth: 3,
            borderRadius: 15,
            marginBottom: 3,
            zIndex: 10,
          },
          descriptionContainer1: {
              flex: 1,
              margin: 5,          
          },
          descriptionContainer2: {
            flexDirection: 'column',   
      
          },
          image: {
            height: 150,
            width: 150,
            backgroundColor: '#25db55',
            borderRadius: 15,
          },
          textStyle: {
            fontSize: 15,
            fontWeight: 'bold',
          },

  });