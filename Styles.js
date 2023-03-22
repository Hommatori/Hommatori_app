import {StyleSheet, Platform} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
        container: {
            paddingTop: Platform.OS === 'android' ? Constants.StatusBarheight: 0,
            
            //justifyContent: 'center',
        },
        searchBar: {
            alignItems: 'center',
            margin: 10,
            borderRadius: 0,
            padding: 20,
            elevation: 2,
            marginBottom: 5,
            backgroundColor: '#',
        }
  });