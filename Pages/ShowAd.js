
import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, Linking, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ButtonStyles from '../Styles/ButtonStyles';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import axios from 'axios';
import BASE_URL from '../json/BaseUrl';
import ViewAd from '../components/ViewAd';

// Näytetään yksittäinen haettu ilmoitus
export default function ShowAd({ navigation, route }) {

  const [ad, setAd] = useState([]);
  const [publisher, setPublisher] = useState([]);

  useEffect(() => {
    getData();
    getPublisher();
  }, []);

  const getData = async () => {                 //haetaan ilmoitus id.n perusteella

    try {
      const results = await axios.get(BASE_URL + '/ad/' + route.params.adid)
      setAd(results.data)
      //console.log(results)

    } catch (error) {
      console.log("getAd error", error)
    }
  }

  const getPublisher = async () => {          //haetaan käyttäjätiedot
    try {
      const results = await axios.get(BASE_URL + '/userr/ad/' + route.params.userid)
      setPublisher(results.data)
      //console.log(results.data)
    } catch (error) {
      console.log("get publisher error", error)
    }
  }

  const handleEmailPress = () => {          //avataan puhelimen mail äppi ja syötetään osoite valmiiksi (ei toimi emulaattorissa)
    const email = publisher.email;
    try {
      Linking.openURL(`mailto:${email}`);
    } catch (e) {
      console.log(e)
    }
  }
  const handlSmsPress = () => {           //avataan puhelimen viestisovellus ja syötetään numero valmiiksi (ei tomi emulaattorissa)
    const number = publisher.phonenumber;
    try {
      Linking.openURL(`sms:${number}`);
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar style="light" translucent={true} />
        <Header></Header>
        <View style={styles.container2}>
          <ViewAd ad={ad} publisher={publisher} />
          <Pressable style={ButtonStyles.button}
            onPress={() => handleEmailPress()}
          >
            <Text style={ButtonStyles.buttonText}>Lähetä sähköposti</Text>
          </Pressable>
          <Pressable style={ButtonStyles.button}
            onPress={() => handlSmsPress()}
          >
            <Text style={ButtonStyles.buttonText}>Lähetä textiviesti</Text>
          </Pressable>
        </View>
        <NavBar navigation={navigation}></NavBar>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container2: {
    flex: 1,
    margin: 10,
  },
});