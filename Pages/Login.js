
import { React, useState } from 'react';
import { View, Text, Pressable, TextInput, Alert, Keyboard, TouchableWithoutFeedback, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Buffer } from 'buffer';
import * as SecureStore from 'expo-secure-store';
import Header from '../components/Header';
import ButtonStyles from '../Styles/ButtonStyles';
import LoginStyles from '../Styles/LoginStyles';
import BaseUrl from '../json/BaseUrl';
import jwtDecode from 'jwt-decode'

//Kirjaudu sisään sivu
export default function Login({ navigation }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {             //funktio jolla lähetetään palvelimelle kirjautumis pyyntö
    try {
      const requestBody = {
        usingMobile: true
      };

      const token = Buffer.from(username.toLowerCase() + ':' + password).toString('base64');
      console.log(BaseUrl)
      const response = await fetch(BaseUrl + '/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Authorization': 'Basic ' + token + '',
        },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        const setCookieHeader = response.headers.get('set-cookie');
        const accessToken = setCookieHeader.split('=')[1].split(';')[0];

        // Get the decoded payload
        const decodedToken = jwtDecode(accessToken);

        // Save cookies to 
        await SecureStore.setItemAsync('userData', JSON.stringify(decodedToken.user));
        await SecureStore.setItemAsync('accessToken', accessToken);

        navigation.navigate('LoggedIn')
        console.log('Logged in')

      } else {
        Alert.alert('Syötä tunnistautumistiedot!');
        console.log('Unauthorized');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={LoginStyles.container}>
        <StatusBar style="light" translucent={true} />
        <Header></Header>

        <View style={LoginStyles.property}>
          <Text style={LoginStyles.headerText}>Kirjaudu sisään</Text>
          <View>
            <Text style={LoginStyles.itemText}>Sähköpostiosoite</Text>
            <TextInput style={LoginStyles.textInputContainer}
              placeholder="Syötä käyttäjätunnus"
              onChangeText={(text => setUsername(text))}
              keyboardType='email-address'
            >
            </TextInput>
            <Text style={LoginStyles.itemText}>Salasana</Text>
            <TextInput style={LoginStyles.textInputContainer}
              placeholder="Syötä salasana"
              onChangeText={(text => setPassword(text))}
              secureTextEntry={true}
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

      </View>
    </TouchableWithoutFeedback>
  );
}