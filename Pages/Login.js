import {React, useState} from 'react';
import {View, Text, Pressable, TextInput, Alert} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Buffer } from 'buffer';
import * as SecureStore from 'expo-secure-store';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import ButtonStyles from '../Styles/ButtonStyles';
import LoginStyles from '../Styles/LoginStyles';
import BaseUrl from '../json/BaseUrl';
import jwtDecode from 'jwt-decode'


export default function Login({navigation}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const getCookie = async () =>{
      const accessToken = await SecureStore.getItemAsync('accessToken');
      console.log(accessToken)
    }

      const login = async () => {
        try{
          const requestBody = {
            usingMobile: true
          };
  
          const token = Buffer.from(username.toLowerCase()+':'+password).toString('base64');
          const response = await fetch(BaseUrl+'/login', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json',
                  'Authorization': 'Basic '+token+'',
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
  
        Alert.alert('Kirjauduttu sisään!');
        navigation.navigate('LoggedIn')
        console.log('Logged in')
  
        /* const a = await AsyncStorage.getItem('session')
        console.log(decodeURIComponent(a))
        const b = JSON.parse(decodeURIComponent(a))
        console.log(b.id)  */
      } else {
        Alert.alert('Syötä tunnistautumistiedot!');
        console.log('Unauthorized');
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
            //onPress={() => getCookie()}
            >
            <Text style={ButtonStyles.buttonText}>Luo uusi tili</Text>
          </Pressable>
  
        </View>   
  
       {/*  <NavBar navigation={navigation}></NavBar> */}
  
       </View>
     
      );
  }