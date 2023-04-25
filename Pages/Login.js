import {React, useState} from 'react';
import {View, Text, Pressable, TextInput, Alert} from 'react-native';
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

    const getCookie = async () =>{
      const userCookie = await AsyncStorage.getItem('user');
      const sessionCookie = await AsyncStorage.getItem('session');
      const cookieHeader = `user=${userCookie}; session=${sessionCookie}`;
      console.log(cookieHeader);
      }

    const login = async () => {
      try{
        const token = Buffer.from(username+':'+password).toString('base64');
        const response = await fetch(BaseUrl+'/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Basic '+token+'',
        },
    });

    if (response.ok) {
      const setCookieHeader = response.headers.get('set-cookie');
      const cookiesArray = setCookieHeader.split(',').map((cookieStr) => cookieStr.trim());
      const cookies = cookiesArray.reduce((acc, cookieStr) => {
        const [name, value] = cookieStr.split(';')[0].split('=');
        acc[name] = value;
        return acc;
      }, {});

      // Save cookies to AsyncStorage
      await AsyncStorage.setItem('user', cookies['user']);
      await AsyncStorage.setItem('session', cookies['session']);

      Alert.alert('Logged in');
      navigation.navigate('LoggedIn')
      console.log('Logged in')
      getCookie()

/*       const a = await AsyncStorage.getItem('user')
      console.log(decodeURIComponent(a))
      const b = JSON.parse(decodeURIComponent(a))
      console.log(b.id) */
    } else {
      Alert.alert('Unauthorized');
      Console.log('Unauthorized');
    }
  } catch (error) {
    console.error('Login error:', error);
  }
};    
 

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
            //onPress={() => navigation.navigate('AdAccount')}
            onPress={() => getCookie()}
            >
            <Text style={ButtonStyles.buttonText}>Luo uusi tili</Text>
          </Pressable>
  
        </View>   
  
        <NavBar navigation={navigation}></NavBar>
  
       </View>
     
      );
  }