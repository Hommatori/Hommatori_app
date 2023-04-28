import {StyleSheet, Platform} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

        container: {
          flex: 1,
          backgroundColor: '#FFFFFF',
        },
        headerContainer:{
            alignItems: 'center',  
        },
          container2: {
            flex: 1,
            margin: 10,           
        },
        userDataContainer: {
            flex: 1,
            justifyContent: 'center',
        },
        headerText: {
          fontSize: 30,
          fontWeight: 'bold',
        },
        itemText: {
          fontSize: 20,
          fontWeight: 'bold',
        },  



  });