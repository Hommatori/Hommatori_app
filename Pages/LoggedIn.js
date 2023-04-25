import {React, useEffect, useState} from 'react';
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


export default function LoggedIn({navigation}) {


    const getCookie = async () =>{
      const userCookie = await AsyncStorage.getItem('user');
      const sessionCookie = await AsyncStorage.getItem('session');
      const cookieHeader = `user=${userCookie}; session=${sessionCookie}`;
      console.log(cookieHeader);
      }

async function logout() {
        
    const userCookie = await AsyncStorage.getItem('user');
    const sessionCookie = await AsyncStorage.getItem('session');
    
      if (!userCookie) {
      // Handle the case when the user cookie is not available
      // e.g., navigate to the login screen
        console.log('cookie not found')
      }
    
    const cookieHeader = `user=${userCookie}; session=${sessionCookie}`;

    const response = await fetch(BaseUrl+'/logout', {
        method: 'POST',
        credentials: cookieHeader,
    });

    if (response.ok) {
        try {
            await AsyncStorage.clear();
            navigation.navigate('Login');
            console.log('AsyncStorage cleared successfully.');
            Alert.alert('Kirjaudutu ulos!')
            getCookie()
            
        } catch (error) {
            console.log('Error clearing AsyncStorage: ', error.message);
        }
    }} 

    

    

    return (
    
      <View style={LoginStyles.container}>
        <StatusBar style="light" translucent={true}/>
          <Header></Header>
          
          <View style={LoginStyles.property}> 
            <Text style={LoginStyles.headerText}>Tilisivu</Text>
              <View>
                  <Pressable 
                    style={ButtonStyles.button}
                    //onPress={() => navigation.navigate('ShowAd')}
                    onPress={() => getCookie()}
                    >
                    <Text style={ButtonStyles.buttonText}>Omat ilmoitukset</Text>
                  </Pressable>
                </View>
  
          <Pressable 
            style={ButtonStyles.button}
            onPress={() => logout()}
            >
            <Text style={ButtonStyles.buttonText}>Kirjaudu ulos</Text>
          </Pressable>
  
        </View>   
  
        <NavBar navigation={navigation}></NavBar>
  
       </View>
     
      );
  }