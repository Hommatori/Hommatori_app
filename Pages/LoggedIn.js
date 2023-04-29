import { React, useEffect, useState } from 'react';
import { View, Text, Pressable, TextInput, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SecureStore from 'expo-secure-store';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import ButtonStyles from '../Styles/ButtonStyles';
import Styles from '../Styles/LoggedInStyles';
import BASE_URL from '../json/BaseUrl';
import UserDetails from '../components/UserDetails'
import axios from 'axios';


export default function LoggedIn({ navigation }) {

  const [userData, setUserData] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await SecureStore.getItemAsync('accessToken');
        const user = await SecureStore.getItemAsync('userData');
        //console.log(accessToken)
        const userObject = JSON.parse(user);
        const config = {
          headers: {
            Authorization: `Basic ${accessToken}`
          }
        };
        const response = await axios.get(`${BASE_URL}/userr/getprivatedata/${userObject.id}`, config);
        setUserData(response.data);
        //console.log(response.data)
      } catch (error) {
        console.error(error);
        Alert.alert('Error fetching data');
      }
    };

    fetchData();
  }, []);

  async function logout() {
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

  const ownAdsClicket = (userId) => {
    navigation.navigate('OwnAds', { userId })
  }



  return (

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
            onPress={() => { navigation.navigate('Account') }}>
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

  );
}