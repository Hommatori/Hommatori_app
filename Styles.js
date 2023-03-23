import {StyleSheet, Platform} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
        },
        heading: {
    
            padding: 10,
        },
        font: {
            fontSize: 25,
            fontWeight: 'bold',
        },
        borders: {
            borderColor: '#24e357',
            borderWidth: 3,
            borderRadius: 15,
            padding: 5,
            backgroundColor: '#FFFFFF',
        },
        rowContainer: {
            flex: 1,
            flexDirection: 'row',
            marginTop: 5,
            marginBottom: 5,
        },
        rowText: {
            fontSize: 20,
            marginLeft: 5,
          },
          navButton: {
            marginRight: 10,
            fontSize: 24,
            padding: 4,
          },
          modal: {
            marginTop: 100,
            padding:20,
            backgroundColor: '#fafafa',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#24e357',
            borderWidth: 3,
            borderRadius: 15,
            elevation: 5,
          },
          modalItem: {
            padding: 10,
            width: 150,
            alignItems: 'center',
            marginTop: 10,
            color: '#333',
            fontWeight: 'bold',
            borderColor: '#24e357',
            borderWidth: 3,
            borderRadius: 15,
          }
  });