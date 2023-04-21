import React from 'react';
import {View, Text, Pressable} from 'react-native';
import WriteMessageStyles from '../Styles/WriteMessageStyles';
import ButtonStyles from '../Styles/ButtonStyles';
import { TextInput } from 'react-native-gesture-handler';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import { StatusBar, hidden } from 'expo-status-bar';

export default function WriteMessage({navigation}) {

      // Tämä ei ole käytössä
    return (
    
    <View style={WriteMessageStyles.container}>
      <StatusBar style="light" translucent={true}/>
      <Header></Header>

        <View style={WriteMessageStyles.property}>  
            <Text>Lähetä viesti</Text>
            <Text>...</Text>
            <Text>Otsikko</Text>
            <TextInput style={WriteMessageStyles.textInputContainer1}></TextInput>
            <Text>Kuvaus</Text>
            <TextInput 
              style={WriteMessageStyles.textInputContainer2}
              multiline={true}
              textAlignVertical="top"
              >
            </TextInput>

            <Pressable style={ButtonStyles.button}>
                <Text style={ButtonStyles.buttonText}>Lähetä</Text>
              </Pressable>

        </View> 

      <NavBar navigation={navigation}></NavBar>

     </View>
   
    );
  }