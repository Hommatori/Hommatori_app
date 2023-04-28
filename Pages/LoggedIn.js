import {React, useEffect, useState} from 'react';
import {View, Text, Pressable, TextInput, Alert} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Buffer } from 'buffer';
import * as SecureStore from 'expo-secure-store';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import ButtonStyles from '../Styles/ButtonStyles';
import Styles from '../Styles/LoggedInStyles';
import BASE_URL from '../json/BaseUrl';
import UserDetails from '../components/UserDetails'
import axios from 'axios';


export default function LoggedIn({navigation}) {

  const [userId, setUserId] = useState('14')
  const [userData, setUserData] = useState('')

  useEffect(() => {
    getUserData();
  },[]);

    const getCookie = async () =>{
    const userCookie = await SecureStore.getItemAsync('user');
    const sessionCookie = await SecureStore.getItemAsync('session');
    const cookieHeader = `user=${userCookie}; session=${sessionCookie}`;
    console.log(cookieHeader);
    }

    async function logout() {
        
      const userCookie = await SecureStore.getItemAsync('user');
      const sessionCookie = await SecureStore.getItemAsync('session');
    
      if (!userCookie) {
      // Handle the case when the user cookie is not available
      // e.g., navigate to the login screen
        console.log('cookie not found')
      }
    
    const cookieHeader = `user=${userCookie}; session=${sessionCookie}`;

    const response = await fetch(BASE_URL+'/logout', {
        method: 'POST',
        credentials: cookieHeader,
    });

    if (response.ok) {
        try {
            await SecureStore.deleteItemAsync('user');
            await SecureStore.deleteItemAsync('session');
            navigation.navigate('Login');
            console.log('logged out');
            Alert.alert('Kirjaudutu ulos!')
            //getCookie()
            
        } catch (error) {
            console.log('Error clearing SecureStore: ', error.message);
        }
    }} 

    const getUserData = async () => {
      try{
      const results = await axios.get(BASE_URL+'/userr/'+userId)
      setUserData(results.data)
      //console.log('getUserData success')
      //console.log(results.data)
  

      } catch (error){
        console.log("getData error ", error)
        Alert.alert('Haku epännostui!')
      }} 

    const ownAdsClicket = (userId) => {    
      navigation.navigate('OwnAds',{userId}) 
    }

    

    return (
    
      <View style={Styles.container}>
        <StatusBar style="light" translucent={true}/>
          <Header></Header>
         <View style={Styles.container2}>
            <View style={Styles.headerContainer}>
              <Text style={Styles.headerText}>Omasivu</Text>
            </View>

            <View style={Styles.userDataContainer}>
              <UserDetails user={userData}/>   
            </View> 

            <View>  
              <Pressable style={ButtonStyles.button}
                onPress={() => {navigation.navigate('Account')}}>
                <Text style={ButtonStyles.buttonText}>Muokkaa Tiliä</Text>
              </Pressable>

              <Pressable 
                style={ButtonStyles.button}
                onPress={() => ownAdsClicket(userId)}>
                <Text style={ButtonStyles.buttonText}>Omat ilmoitukset</Text>
              </Pressable>

              <Pressable 
                style={ButtonStyles.button}
                onPress={() => logout()}>
                <Text style={ButtonStyles.buttonText}>Kirjaudu ulos</Text>
              </Pressable> 
          </View>
        </View>   
  
        <NavBar navigation={navigation}></NavBar>
  
       </View>
     
      );
  }