import { React, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import { StatusBar, hidden } from 'expo-status-bar';
import ButtonStyles from '../Styles/ButtonStyles';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import BASE_URL from '../json/BaseUrl';


export default function Account({ navigation, route }) {

  const userdata = route.params.userData
  

  const deleteUser = async () => {
    try {
      const accessToken = await SecureStore.getItemAsync('accessToken');
      //console.log(accessToken)
      //console.log(userdata.userid)
      await axios.delete(BASE_URL+'/userr/'+userdata.userid, {
        headers: { Authorization: 'Bearer ' + accessToken }
      });
      console.log('user removed successfully');
      Alert.alert('Käyttäjätunnus poistettu!');
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

  const handleDeleteUserClicket = () => {
    deleteUser()
    logout()
    navigation.navigate('Login');
  }

  return (

    <View style={styles.container}>
      <StatusBar style="light" translucent={true} />
      <Header></Header>
      <View style={styles.property}>
        <Text style={styles.headerText}>Muokkaa tiliä</Text>
        <View>
          <Text style={styles.itemText}>Etunimi</Text>
          <Text style={styles.itemText2}>{userdata.fname}</Text>
          <TextInput style={styles.textInputContainer}></TextInput>

          <Text style={styles.itemText}>Sukunimi</Text>
          <Text style={styles.itemText2}>{userdata.lname}</Text>
          <TextInput style={styles.textInputContainer}></TextInput>

          <Text style={styles.itemText}>Sähköposti</Text>
          <Text style={styles.itemText2}>{userdata.email}</Text>
          <TextInput style={styles.textInputContainer}></TextInput>

          <Text style={styles.itemText}>Käyttäjänimi</Text>
          <Text style={styles.itemText2}>{userdata.username}</Text>
          <TextInput style={styles.textInputContainer}></TextInput>

          <Text style={styles.itemText}>Puhelinumero</Text>
          <Text style={styles.itemText2}>{userdata.phonenumber}</Text>
          <TextInput style={styles.textInputContainer}></TextInput>

          {/* <Text style={styles.itemText}>Salasana</Text>
          <Text style={styles.itemText2}>Tässä tietoa</Text>
          <TextInput style={styles.textInputContainer}></TextInput> */}

          <Pressable style={ButtonStyles.button}>
            <Text style={ButtonStyles.buttonText}>Tallenna</Text>
          </Pressable>
          <Pressable style={ButtonStyles.button}
            onPress={() => handleDeleteUserClicket()}
          >
            <Text style={ButtonStyles.buttonText}>Poista</Text>
          </Pressable>
          <Pressable style={ButtonStyles.button}
            onPress={() => { navigation.navigate('LoggedIn') }}
          >
            <Text style={ButtonStyles.buttonText}>Peruuta</Text>
          </Pressable>
        </View>
      </View>
      <NavBar navigation={navigation}></NavBar>
    </View>

  )
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  property: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
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