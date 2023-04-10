import React from 'react';
import {View, Text, Pressable} from 'react-native';
import MessageStyles from '../Styles/MessageStyles';
import ButtonStyles from '../Styles/ButtonStyles';
import { TextInput } from 'react-native-gesture-handler';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import { StatusBar, hidden } from 'expo-status-bar';

export default function Messages({navigation}) {

      // Tämä ei ole käytössä
    return (
    
    <View style={MessageStyles.container}>
      <StatusBar style="light" translucent={true}/>
      <Header></Header>

        <View style={MessageStyles.property}>  
            <Text>Lähetä viesti</Text>
            <Text>...</Text>
            <Text>Otsikko</Text>
            <TextInput style={MessageStyles.textInputContainer1}></TextInput>
            <Text>Kuvaus</Text>
            <TextInput 
              style={MessageStyles.textInputContainer2}
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