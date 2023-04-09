import {StyleSheet, Platform} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({


      label: {
        marginRight: 10,
      },
      circle: {
        height: 28,
        width: 28,
        borderRadius: 15,
        borderWidth:1,
        borderColor:'#000',
        alignItems: 'center',
        justifyContent: 'center',
      },
      checkedCircle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#25db55',
      },

  });