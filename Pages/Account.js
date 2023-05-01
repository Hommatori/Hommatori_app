import { React, useEffect, useState } from 'react';
import {
  View, Text, Pressable, StyleSheet, Alert, Keyboard, TouchableWithoutFeedback
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import { StatusBar } from 'expo-status-bar';
import ButtonStyles from '../Styles/ButtonStyles';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import BASE_URL from '../json/BaseUrl';


export default function Account({ navigation, route }) {

  const [ad, setAd] = useState('')

  useEffect(() => {
    setAd(route.params.userData)
  }, []);


  const deleteUser = async () => {
    try {
      const accessToken = await SecureStore.getItemAsync('accessToken');
      //console.log(accessToken)
      //console.log(userdata.userid)
      await axios.delete(BASE_URL + '/userr/' + userdata.userid, {
        headers: { Authorization: 'Bearer ' + accessToken }
      });
      console.log('user removed successfully');
      Alert.alert('Käyttäjätunnus poistettu!');
      logout()
      navigation.navigate('Login')
    } catch (error) {
      console.log('error occurred in removing User', error);
      Alert.alert('Käyttäjän poistaminen epäonnistui!');
    }
  };

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
    } catch (error) {
      console.log('Error clearing SecureStore: ', error.message);
    }
  }

  const upadeUser = async () => {
    const accessToken = await SecureStore.getItemAsync('accessToken');
    console.log(ad.username)
    try {
      await axios.put(BASE_URL + '/userr/' + ad.userid, {
        fname: ad.fname,
        lname: ad.lname,
        username: ad.username,
        email: ad.email.toLowerCase(),
        phonenumber: ad.phonenumber,
        password: ad.password,
      }, {
        headers: { Authorization: 'Bearer' + accessToken }
      })
      console.log('User updated successfully')
      Alert.alert('Käyttäjä päivetty!');
      logout()
      navigation.navigate('Login')

    } catch (e) {
      console.log('update user error', e)
      Alert.alert('Käyttäjän päivitys epäonnistui!')
    }
  }

  const handleDeleteUserClicket = () => {
    Alert.alert(
      "Oletko varma?",
      "Tätä ei voi enää perua.",
      [
        { text: "Peruuta", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
        { text: "Hyväksy", onPress: () => deleteUser() }
      ]
    );
  }




  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar style="light" translucent={true} />
        <Header></Header>
        <View style={styles.property}>

          <Text style={styles.headerText}>Muokkaa tiliä</Text>
          <View style={styles.content2}>
            <Text style={styles.itemText}>Etunimi</Text>
            <TextInput style={styles.textInputContainer}
              value={ad.fname}
              onChangeText={(text) => {
                setAd({ ...ad, fname: text }); // update the ad object
              }}
            >
            </TextInput>
            <Text style={styles.itemText}>Sukunimi</Text>
            <TextInput style={styles.textInputContainer}
              value={ad.lname}
              onChangeText={(text) => {
                setAd({ ...ad, lname: text }); // update the ad object
              }}
            >
            </TextInput>
            <Text style={styles.itemText}>Sähköposti</Text>
            <TextInput style={styles.textInputContainer}
              value={ad.email}
              onChangeText={(text) => {
                setAd({ ...ad, email: text }); // update the ad object
              }}
            >
            </TextInput>
            <Text style={styles.itemText}>Käyttäjänimi</Text>
            <TextInput style={styles.textInputContainer}
              value={ad.username}
              onChangeText={(text) => {
                setAd({ ...ad, username: text }); // update the ad object
              }}
            >
            </TextInput>
            <Text style={styles.itemText}>Puhelinumero</Text>
            <TextInput style={styles.textInputContainer}
              value={ad.phonenumber}
              onChangeText={(text) => {
                setAd({ ...ad, phonenumber: text }); // update the ad object
              }}
            >
            </TextInput>
            <Text style={styles.itemText}>Uusi salasana</Text>
            <TextInput style={styles.textInputContainer}
              onChangeText={(text) => {
                setAd({ ...ad, password: text }); // update the ad object
              }}
            >
            </TextInput>
          </View>
          <View>
            <Pressable style={ButtonStyles.button}
              onPress={() => upadeUser()}>
              <Text style={ButtonStyles.buttonText}>Tallenna</Text>
            </Pressable>

            <Pressable style={ButtonStyles.button}
              onPress={() => handleDeleteUserClicket()}>
              <Text style={ButtonStyles.buttonText}>Poista</Text>
            </Pressable>

            <Pressable style={ButtonStyles.button}
              onPress={() => { navigation.navigate('LoggedIn') }}>
              <Text style={ButtonStyles.buttonText}>Peruuta</Text>
            </Pressable>
          </View>
        </View>
        <NavBar navigation={navigation}></NavBar>
      </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  property: {
    flex: 1,
    margin: 10,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content2: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInputContainer: {
    backgroundColor: '#dadee6',
    padding: 7,
    borderRadius: 10,
  }


});