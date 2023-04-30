import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, Image, Pressable, Alert, StyleSheet } from 'react-native';
import { StatusBar, hidden } from 'expo-status-bar';
import ButtonStyles from '../Styles/ButtonStyles';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import axios from 'axios';
import BASE_URL from '../json/BaseUrl';
import * as SecureStore from 'expo-secure-store';
import ViewAd from '../components/ViewAd';


export default function OwnAd({ navigation, route }) {

  const [ad, setAd] = useState([]);
  const [publisher, setPublisher] = useState('')

  useEffect(() => {
    getData();
    getPublisher();
  }, []);

  const getData = async () => {
    try {
      const results = await axios.get(BASE_URL + '/ad/' + route.params.adid)
      setAd(results.data)
      //console.log(results.data)

    } catch (error) {
      console.log("getAd error", error)
    }
  }

  const getPublisher = async () => {
    try {
      const results = await axios.get(BASE_URL + '/userr/ad/' + route.params.userid)
      setPublisher(results.data)
    } catch (error) {
      console.log("get publisher error", error)
    }
  }

  const deleteAd = async () => {
    try {
      const accessToken = await SecureStore.getItemAsync('accessToken');
      await axios.delete(BASE_URL + '/ad/' + route.params.adid, {
        headers: { Authorization: 'Bearer ' + accessToken }
      });
      console.log('ad removed successfully');
      Alert.alert('Ilmoitus poistettu!');
    } catch (error) {
      console.log('error occurred in removing ad', error);
      Alert.alert('Ilmoituksen poistaminen epäonnistui!');
    }
  };

  const handleDeleteClicked = () => {
    deleteAd()
    navigation.navigate('LoggedIn')
  }

  const handleEditAdClicked = (adid) => {
    navigation.navigate('EditAd',{adid})
    //console.log(adid)
  }


  return (


    <View style={styles.container}>
      <StatusBar style="light" translucent={true} />
      <Header></Header>
      <View style={styles.container2}>
        <ViewAd ad={ad} publisher={publisher} />
        <Pressable style={ButtonStyles.button}
          onPress={(() => handleEditAdClicked(route.params.adid))} >
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
