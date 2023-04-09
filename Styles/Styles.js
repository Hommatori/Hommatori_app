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
        searchBoxContainer1: {
            zIndex:9999,
          },
          searchBoxContainer2: {  
            marginTop: 10,
            marginBottom: 10,
            backgroundColor: '#25db55',        
            borderRadius: 12,
            elevation: 10,
      
          },
          textInputContainer1: {
            backgroundColor: '#FFFFFF',
            margin: 10,
            borderRadius: 12,   
            padding:5,       
          },
          searchButtonContainer:{  
            flexDirection: 'row',
          },
          dropDawnList: {
            flex: 1,
            margin: 10,
          },
          dropDawn: {
            borderRadius: 12,
            borderColor: 'white',
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

  });