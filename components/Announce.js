import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Styles from './Styles';
import Footer from './Footer';

export default function Announce({navigation}) {

      // Tämä ei ole käytössä
    return (
    
    <View style={Styles.container}>

        <View style={Styles.header}>
            <Text>Hommatori</Text>
        </View>
          

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

     </View>
   
    );
  }