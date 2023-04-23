import {React, useState} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Buffer } from 'buffer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import ButtonStyles from '../Styles/ButtonStyles';
import LoginStyles from '../Styles/LoginStyles';
import BaseUrl from '../json/BaseUrl';







export default function Login({navigation}) {

    const [username, setUsername] = useState('testi@4ksagl')
    const [password, setPassword] = useState('Makkara1')

   

    const login = async () => {
        const token = Buffer.from(username+':'+password).toString('base64');
        const response = await fetch(BaseUrl+'/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Basic '+token+'',
        },
    });
 
    if (response.ok) {
        const data = await response.json();

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
       // console.log(sessionCookie);
       //await SecureStore.setItemAsync(sessionCookie);
       //await SecureStore.setItemAsync(userCookie); 
       //await AsyncStorage.setItem(sessionCookie)
       //await AsyncStorage.setItem(userCookie)

        console.log('Logged in')
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
                  <TextInput style={LoginStyles.textInputContainer}
                    placeholder="Syötä käyttäjätunnus"
                    onChangeText={(text => setUsername(text))}
                    >
                    </TextInput>
                  <Text style={LoginStyles.itemText}>Salasana</Text>
                  <TextInput style={LoginStyles.textInputContainer}
                    placeholder="Syötä salasana"
                    onChangeText={(text => setPassword(text))}
                    >
                  </TextInput>
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