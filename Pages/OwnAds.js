
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Image, Pressable, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Styles from '../Styles/OwnAdsStyles';
import ButtonStyles from '../Styles/ButtonStyles';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import axios from 'axios';
import BASE_URL from '../json/BaseUrl';

//Näytetään kaikki omat ilmoitukset
export default function OwnAds({ navigation, route }) {

  const [ads, setAds] = useState([]);

  useEffect(() => {
    getDataByUserId()
  }, []);

  const getDataByUserId = async () => {               //haetaan ilmoitukset käyttäjän id.n perusteella
    try {
      const results = await axios.get(BASE_URL + '/ad/withuserid/get/?userid=' + route.params.userId)
      setAds(Object.values(results.data))
      console.log('getData success')

    } catch (error) {
      console.log("getData error ", error)
      Alert.alert('Sinulla ei ole ilmoituksia!')
    }
  }

  const handleButtonAdClicket = (adid, userid) => { //määritetään mitä tapahtuu kun painetaan ilmoitusta
    navigation.navigate('OwnAd', { adid, userid })
  }

  const translateRegion = (region) => {             //tehdään käännös alueen all sanalle.
    if (region === 'all') {
      return 'Kokosuomi'
    } else {
      return region
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={Styles.container}>
        <StatusBar style="light" translucent={true} />
        <Header></Header>
        <View style={Styles.container2}>
          <Text style={Styles.headerTextStyle}> Omat ilmoitukset </Text>
          <ScrollView style={Styles.scrollViewStyle}>
            {
              Object.values(ads).map((item, index) => (
                <Pressable key={index} onPress={(() => handleButtonAdClicket(item.adid, item.userid))}>
                  <View style={Styles.adContainer}>
                    <Image
                      style={Styles.image}
                    />
                    <View style={Styles.descriptionContainer1}>
                      <View style={Styles.descriptionContainer2}>
                        <View style={Styles.descriptionContainer3}>
                          <Text style={Styles.textStyle}>{item.header} </Text>
                          <Text style={Styles.textStyle}>Hinta {item.price}€</Text>
                          <Text style={Styles.textStyle}>{translateRegion(item.region)}</Text>
                        </View>
                      </View>
                      <View style={Styles.descriptionContainer3}>
                        <Text>{item.description}</Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              ))
            }
          </ScrollView>
          <View style={ButtonStyles.button}>
            <Pressable style={ButtonStyles.buttonSearch}
              onPress={() => navigation.navigate('LoggedIn')}
            >
              <Text style={ButtonStyles.buttonText}>Takaisin</Text>
            </Pressable>
          </View>
        </View>
        <NavBar navigation={navigation}></NavBar>
      </View>
    </TouchableWithoutFeedback>
  );
}
