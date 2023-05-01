
import { React, useEffect, useState } from 'react';
import { View, Text, Pressable, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SecureStore from 'expo-secure-store';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import ButtonStyles from '../Styles/ButtonStyles';
import Styles from '../Styles/LoggedInStyles';
import BASE_URL from '../json/BaseUrl';
import UserDetails from '../components/UserDetails'
import axios from 'axios';

//ensimmäinen sivu kun kirjaudutaan sisään
export default function LoggedIn({ navigation }) {

  const [userData, setUserData] = useState('')

  useEffect(() => {                     
    const fetchData = async () => {                 //Haetaan käyttäjätiedot palvelimelta
      try {   
        const accessToken = await SecureStore.getItemAsync('accessToken');
        const user = await SecureStore.getItemAsync('userData');
        const userObject = JSON.parse(user);
        const config = {
          headers: {
            Authorization: `Basic ${accessToken}`
          }
        };
        const response = await axios.get(`${BASE_URL}/userr/getprivatedata/${userObject.id}`, config);
        setUserData(response.data);
      } catch (error) {
        console.error(error);
        Alert.alert('Error fetching data');
      }
    };

    fetchData();
  }, []);

  async function logout() {                   //Kirjaudutaan ulos ja siirrytään kirjautumissuvulle
    try {
      fetch(BASE_URL + '/logout', {
        method: 'POST',
        credentials: 'include'
      })
      await SecureStore.deleteItemAsync('userData');
      await SecureStore.deleteItemAsync('accessToken');
      navigation.navigate('Login');
      console.log('logged out');
      Alert.alert('Kirjaudutu ulos!');
    } catch (error) {
      console.log('Error clearing SecureStore: ', error.message);
    }
  }

  const ownAdsClicket = (userId) => {               //käsitellään omat ilmoitukset painaminen
    navigation.navigate('OwnAds', { userId })
  }

  const ediAccountClicket = (userData) => {         //käsitellään muokkaa käyttäjätunnusta painaminen
    navigation.navigate('Account', { userData })
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={Styles.container}>
        <StatusBar style="light" translucent={true} />
        <Header></Header>
        <View style={Styles.container2}>
          <View style={Styles.headerContainer}>
            <Text style={Styles.headerText}>Omasivu</Text>
          </View>

          <View style={Styles.userDataContainer}>
            <UserDetails user={userData} />
          </View>

          <View>
            <Pressable style={ButtonStyles.button}
              onPress={() => ediAccountClicket(userData)}>
              <Text style={ButtonStyles.buttonText}>Muokkaa Tiliä</Text>
            </Pressable>

            <Pressable
              style={ButtonStyles.button}
              onPress={() => ownAdsClicket(userData.userid)}>
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
    </TouchableWithoutFeedback>
  );
}