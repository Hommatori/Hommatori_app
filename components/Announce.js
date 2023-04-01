import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Styles from '../Styles/Styles';
import HeaderStyles from '../Styles/HeaderStyles';
import FooterStyles from '../Styles/TaskBarStyles';
import AnnounceStyles from '../Styles/AnnounceStyles';
import { TextInput } from 'react-native-gesture-handler';

export default function Announce({navigation}) {

      // Tämä ei ole käytössä
    return (
    
    <View style={Styles.container}>

        <View style={HeaderStyles.header}>
            <Text style={HeaderStyles.headerText}>Hommatori</Text>
        </View>

        <View style={AnnounceStyles.head}>  
            <Text>Jätä ilmoitus</Text>
            <Text>Myytkö Vai Ostatko?</Text>
            <Text>Otsikko</Text>
            <TextInput style={AnnounceStyles.textInputContainer1}></TextInput>
            <Text>Kuvaus</Text>
            <TextInput style={AnnounceStyles.textInputContainer2}></TextInput>


        </View> 

        <View style={FooterStyles.buttonContainer}>
          <Pressable style={FooterStyles.button}
            onPress={() => navigation.navigate('MainPage')}
          >
            <Text style={FooterStyles.buttonText}>Haku</Text>
          </Pressable>
          <Pressable style={FooterStyles.button} 
            onPress={() => navigation.navigate('Announce')} 
          >
            <Text style={FooterStyles.buttonText}>ilmoita</Text>
          </Pressable>
          <Pressable style={FooterStyles.button}>
            <Text style={FooterStyles.buttonText}>Viestit</Text>
          </Pressable>
          <Pressable style={FooterStyles.button}>
            <Text style={FooterStyles.buttonText}>Tili</Text>
          </Pressable>
        </View> 
     </View>
   
    );
  }