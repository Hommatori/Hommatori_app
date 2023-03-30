
import React from 'react';
import { Text,  View, Pressable} from 'react-native';
import Styles from './Styles';

export default function Footer({navigation}) {

  
    return (
  
        <View style={Styles.buttonContainer}>
          <Pressable style={Styles.button}>
            <Text style={Styles.buttonText}>Haku</Text>
          </Pressable>
          <Pressable style={Styles.button}>
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
  