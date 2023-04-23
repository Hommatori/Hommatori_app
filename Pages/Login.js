import {React, useState} from 'react';
import {View, Text, Pressable, TextInput, AsyncStorage} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Buffer } from 'buffer';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import ButtonStyles from '../Styles/ButtonStyles';
import LoginStyles from '../Styles/LoginStyles';
import BaseUrl from '../json/BaseUrl';





export default function Login({navigation}) {


    const login = async () => {
        const userName = 'testi@4ksag1';
        const password = 'Makkara1';
        const token = Buffer.from('${userName}:${password}').toString('base64');
        const response = await fetch(BaseUrl+'/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Basic ${token}',
        },
    });
    
    if (response.ok) {

        const sessionCookie = {
            name: 'session',
            value: JSON.stringify(data.sessionCookie),
            domain: 'localhost',
            path: data.sessionCookie.path,
            expires: new Date(Date.now() + data.sessionCookie.originalMaxAge),
        };

        const userCookie = {
            name: 'user',
            value: JSON.stringify(data.user),
            domain: 'localhost',
            path: data.sessionCookie.path,
            expires: new Date(Date.now() + data.sessionCookie.originalMaxAge),
        };

        await AsyncStorage.set(sessionCookie);
        await AsyncStorage.set(userCookie);

        console.log('Logged in');
    } else {
        console.log('Unauthorized');
    }
}

    //näyttää tilin tiedot ja mahdollistaa muokkauksen

    return (
    
      <View style={LoginStyles.container}>
        <StatusBar style="light" translucent={true}/>
          <Header></Header>
          
          <View style={LoginStyles.property}> 
            <Text style={LoginStyles.headerText}>Kirjaudu sisään</Text>
              <View>
                <Text style={LoginStyles.itemText}>Käyttäjätunnus</Text>
                  <TextInput style={LoginStyles.textInputContainer}></TextInput>
                  <Text style={LoginStyles.itemText}>Salasana</Text>
                  <TextInput style={LoginStyles.textInputContainer}></TextInput>
                  <Pressable 
                    style={ButtonStyles.button}
                    onPress={() => login()}
                    >
                    <Text style={ButtonStyles.buttonText}>Kirjaudu</Text>
                  </Pressable>
                </View>
  
          <Pressable 
            style={ButtonStyles.button}
            onPress={() => navigation.navigate('AdAccount')}
            >
            <Text style={ButtonStyles.buttonText}>Luo uusi tili</Text>
          </Pressable>
  
        </View>   
  
        <NavBar navigation={navigation}></NavBar>
  
       </View>
     
      );
  }