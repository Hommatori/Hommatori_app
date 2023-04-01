import React from 'react';
import {View, TextInput} from 'react-native';
import Styles from './Styles';

export default function SearchBox({navigation}) {

      // HOXXX Tämä ei ole käytössä
    return (
  
    <View style={Styles.searcBoxContainer}>    
        <View>
          <View>
            <TextInput style={Styles.textInputContainer1}
            placeholder="Syötä hakusana"
            />       
          </View>
          <View style={Styles.searchButtonContainer}>
            <TextInput style={Styles.textInputContainer2}
            placeholder="Postinumero"
            />    
            <TextInput style={Styles.textInputContainer2}
            placeholder="Varaus"
            />    
          </View>
        </View>
    </View>
    );
  }
  