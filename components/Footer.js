
import React from 'react';
import { Text,  View, Pressable} from 'react-native';
import Styles from './Styles';

export default function Footer({navigation}) {

  // HOXX tämä ei ole käytössä
  
    return (
  
      <View style={Styles.buttonContainer}>
      <Pressable style={Styles.button}
        onPress={() => navigation.navigate('MainPage')}
      >
        <Text style={Styles.buttonText}>Haku</Text>
      </Pressable>
      <Pressable style={Styles.button} 
        onPress={() => navigation.navigate('Announce')} 
      >
        <Text style={Styles.buttonText}>Ilm.</Text>
      </Pressable>
      <Pressable style={Styles.button}>
        <Text style={Styles.buttonText}>Viestit</Text>
      </Pressable>
      <Pressable style={Styles.button}>
        <Text style={Styles.buttonText}>Tili</Text>
      </Pressable>
    </View> 

    );
  }
  