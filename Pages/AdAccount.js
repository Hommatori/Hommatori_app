import { React, useState } from 'react';
import {
  View, Text, Pressable, Alert, Keyboard, TouchableWithoutFeedback, StyleSheet,
  Platform, KeyboardAvoidingView
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Header from '../components/Header';
import { StatusBar } from 'expo-status-bar';
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

  const newUser = async () => {

    const accessToken = await SecureStore.getItemAsync('accessToken');

    try {
      await axios.post(BASE_URL + '/signup', {
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

    } catch (e) {
      console.log('new user error', e)
      Alert.alert('Käyttäjän luonti epäonnistui!')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar style="light" translucent={true} />
        <Header></Header>
        <View style={styles.property} >
          <Text style={styles.headerText}>Luo tili</Text>
          <View style={styles.content}>
            <KeyboardAvoidingView
              style={styles.content}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
              <View style={styles.content2}>
                <Text style={styles.itemText}>Etunimi</Text>
                <TextInput style={styles.textInputContainer}
                  onChangeText={(text => setFname(text))}
                >
                </TextInput>
                <Text style={styles.itemText}>Sukunimi</Text>
                <TextInput style={styles.textInputContainer}
                  onChangeText={(text => setLname(text))}
                >
                </TextInput>
                <Text style={styles.itemText}>Käyttäjätunnus</Text>
                <TextInput style={styles.textInputContainer}
                  onChangeText={(text => setUserName(text))}
                >
                </TextInput>
                <Text style={styles.itemText}>Sähköposti</Text>
                <TextInput style={styles.textInputContainer}
                  onChangeText={(text => setEmail(text))}
                  keyboardType='email-address'
                >
                </TextInput>
                <Text style={styles.itemText}>Puhelinumero</Text>
                <TextInput style={styles.textInputContainer}
                  onChangeText={(text => setPhonenumber(text))}
                  keyboardType='numeric'
                >
                </TextInput>
                <Text style={styles.itemText}>Salasana</Text>
                <TextInput style={styles.textInputContainer}
                  onChangeText={(text => setPassword(text))}
                >
                </TextInput>
              </View>
            </KeyboardAvoidingView>
            <View>
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
        </View>
        {/*  <NavBar navigation={navigation}></NavBar> */}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  property: {
    flex: 1,
    margin: 10,
    marginBottom: 20,
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