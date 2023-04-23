import {React, useState} from 'react';
import {View, Text, Pressable, Modal} from 'react-native';
import AccountStyles from '../Styles/AccountStyles';
import { TextInput } from 'react-native-gesture-handler';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import { StatusBar, hidden } from 'expo-status-bar';
import ButtonStyles from '../Styles/ButtonStyles';


export default function AdAccount({navigation}) {


    // käynnistää luo käyttäjä ruudun

    return(

    <View style={AccountStyles.container}>
         <StatusBar style="light" translucent={true}/>
          <Header></Header>
      <View style={AccountStyles.property}>  
        <Text style={AccountStyles.headerText}>Luo tili</Text>
          <View>
            <Text style={AccountStyles.itemText}>Etunimi</Text>
            <TextInput style={AccountStyles.textInputContainer}></TextInput>
            <Text style={AccountStyles.itemText}>Sukunimi</Text>
            <TextInput style={AccountStyles.textInputContainer}></TextInput>
            <Text style={AccountStyles.itemText}>Sähköposti</Text>
            <TextInput style={AccountStyles.textInputContainer}></TextInput>
            <Text style={AccountStyles.itemText}>Puhelinumero</Text>
            <TextInput style={AccountStyles.textInputContainer}></TextInput>
            <Text style={AccountStyles.itemText}>Salasana</Text>
            <TextInput style={AccountStyles.textInputContainer}></TextInput>

            <Pressable style={ButtonStyles.button}
                onPress={() => {navigation.navigate('Account')}}>
              <Text style={ButtonStyles.buttonText}>Tallenna</Text>
            </Pressable>
            <Pressable 
              style={ButtonStyles.button}
              onPress={() => {navigation.navigate('Login')}}>
              <Text style={ButtonStyles.buttonText}>Peruuta</Text>
            </Pressable>
          </View>
      </View> 
      <NavBar navigation={navigation}></NavBar>
   </View>

  )}