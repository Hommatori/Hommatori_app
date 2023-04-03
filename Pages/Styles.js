import {StyleSheet, Platform} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
        container: {
            flex: 1,
            margin: 10,        
            backgroundColor: '#FFFFFF',
        },
          searchBoxContainer: {
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
          textInputContainer2: {
            backgroundColor: '#FFFFFF',
            flex: 1,
            margin: 10,
            borderRadius: 12, 
            padding: 5,         
          },
          rowContainer: {
            flexDirection: 'row',
            borderColor: '#25db55',
            borderWidth: 3,
            borderRadius: 15,
        },
        rowText: {
            fontSize: 20,
            marginLeft: 5,
        }

  });