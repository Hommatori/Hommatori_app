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

  });