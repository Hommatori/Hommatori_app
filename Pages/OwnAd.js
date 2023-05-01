
import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, Alert, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ButtonStyles from '../Styles/ButtonStyles';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import axios from 'axios';
import BASE_URL from '../json/BaseUrl';
import * as SecureStore from 'expo-secure-store';
import ViewAd from '../components/ViewAd';

//Näytetään oma ilmoitus
export default function OwnAd({ navigation, route }) {

  const [ad, setAd] = useState([]);
  const [publisher, setPublisher] = useState('')

  useEffect(() => {
    getData();
    getPublisher();
  }, []);

  const getData = async () => {                                                 //haetaan oma ilmoitus id.n perusteella
    try {
      const results = await axios.get(BASE_URL + '/ad/' + route.params.adid)
      setAd(results.data)
      //console.log(results.data)

    } catch (error) {
      console.log("getAd error", error)
    }
  }

  const getPublisher = async () => {                                            //haetaan käyttäjätiedot id.n perusteella
    try {
      const results = await axios.get(BASE_URL + '/userr/ad/' + route.params.userid)
      setPublisher(results.data)
    } catch (error) {
      console.log("get publisher error", error)
    }
  }

  const deleteAd = async () => {                                                //poistetaan ilmoitus ja siirrytään tilisivulle
    try {
      const accessToken = await SecureStore.getItemAsync('accessToken');
      await axios.delete(BASE_URL + '/ad/' + route.params.adid, {
        headers: { Authorization: 'Bearer ' + accessToken }
      });
      console.log('ad removed successfully');
      Alert.alert('Ilmoitus poistettu!');
      navigation.navigate('LoggedIn')
    } catch (error) {
      console.log('error occurred in removing ad', error);
      Alert.alert('Ilmoituksen poistaminen epäonnistui!');
    }
  };

  const handleDeleteClicked = () => {                                           //käsitellään poista painettu ja varmistetaan tämä käyttäjältä
    Alert.alert(
      "Oletko varma?",
      "Tätä ei voi enää perua.",
      [
        { text: "Peruuta", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
        { text: "Hyväksy", onPress: () => deleteAd()}
      ]
    );
  }

  const handleEditAdClicked = (adid, userid) => {                              //aukaistaan muokkaa ilmoitusta sivu
    navigation.navigate('EditAd', { adid, userid })
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar style="light" translucent={true} />
        <Header></Header>
        <View style={styles.container2}>
          <ViewAd ad={ad} publisher={publisher} />
          <Pressable style={ButtonStyles.button}
            onPress={(() => handleEditAdClicked(route.params.adid, route.params.userid))} >
            <Text style={ButtonStyles.buttonText}>Muokkaa ilmoitusta</Text>
          </Pressable>
          <Pressable style={ButtonStyles.button}
            onPress={() => handleDeleteClicked()}>
            <Text style={ButtonStyles.buttonText}> Poista</Text>
          </Pressable>
          <Pressable style={ButtonStyles.button}
            onPress={() => navigation.navigate("OwnAds")} >
            <Text style={ButtonStyles.buttonText}> Takaisin</Text>
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
