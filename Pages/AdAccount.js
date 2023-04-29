import { React, useState } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import AccountStyles from '../Styles/AccountStyles';
import { TextInput } from 'react-native-gesture-handler';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import { StatusBar, hidden } from 'expo-status-bar';
import ButtonStyles from '../Styles/ButtonStyles';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import BASE_URL from '../json/BaseUrl'



export default function AdAccount({ navigation }) {

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [password, setPassword] = useState('')

  //console.log(password)

  const newUser = async () => {

    const accessToken = await SecureStore.getItemAsync('accessToken');

    try {
      await axios.post(BASE_URL+'/signup', {
        fname: fname,
        lname: lname,
        username: userName,
        email: email.toLowerCase(),
        phonenumber: phonenumber,
        password: password,
      }, {
        headers: { Authorization: 'Bearer' + accessToken }
      })

      console.log('new user created successfully')
      Alert.alert('Uusi käyttäjä luotu, voit nyt kirjautua sisään!');
      navigation.navigate('Login')
      //console.log(cookieHeader)

    } catch (e) {
      console.log('new user error', e)
      Alert.alert('Käyttäjän luonti epäonnistui!')
    }
  }

  return (

    <View style={AccountStyles.container}>
      <StatusBar style="light" translucent={true} />
      <Header></Header>
      <View style={AccountStyles.property}>
        <Text style={AccountStyles.headerText}>Luo tili</Text>
        <View>
          <Text style={AccountStyles.itemText}>Etunimi</Text>
          <TextInput style={AccountStyles.textInputContainer}
            onChangeText={(text => setFname(text))}
          >
          </TextInput>
          <Text style={AccountStyles.itemText}>Sukunimi</Text>
          <TextInput style={AccountStyles.textInputContainer}
            onChangeText={(text => setLname(text))}
          >
          </TextInput>
          <Text style={AccountStyles.itemText}>Käyttäjätunnus</Text>
          <TextInput style={AccountStyles.textInputContainer}
            onChangeText={(text => setUserName(text))}
          >
          </TextInput>
          <Text style={AccountStyles.itemText}>Sähköposti</Text>
          <TextInput style={AccountStyles.textInputContainer}
            onChangeText={(text => setEmail(text))}
            keyboardType='email-address'
          >
          </TextInput>
          <Text style={AccountStyles.itemText}>Puhelinumero</Text>
          <TextInput style={AccountStyles.textInputContainer}
            onChangeText={(text => setPhonenumber(text))}
            keyboardType='numeric'
          >
          </TextInput>
          <Text style={AccountStyles.itemText}>Salasana</Text>
          <TextInput style={AccountStyles.textInputContainer}
            onChangeText={(text => setPassword(text))}
          >
          </TextInput>

          <Pressable style={ButtonStyles.button}
            onPress={() => newUser()}>
            <Text style={ButtonStyles.buttonText}>Tallenna</Text>
          </Pressable>
          <Pressable
            style={ButtonStyles.button}
            onPress={() => { navigation.navigate('Login') }}>
            <Text style={ButtonStyles.buttonText}>Peruuta</Text>
          </Pressable>
        </View>
      </View>
      {/*  <NavBar navigation={navigation}></NavBar> */}
    </View>

  )
}