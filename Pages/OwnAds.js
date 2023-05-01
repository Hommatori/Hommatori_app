import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Image, Pressable, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Styles from '../Styles/OwnAdsStyles';
import ButtonStyles from '../Styles/ButtonStyles';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import axios from 'axios';
import BASE_URL from '../json/BaseUrl';

export default function OwnAds({ navigation, route }) {

  const [ads, setAds] = useState([]);

  useEffect(() => {
    getDataByUserId()
  }, []);

  const getDataByUserId = async () => {
    try {
      const results = await axios.get(BASE_URL + '/ad/withuserid/get/?userid=' + route.params.userId)
      setAds(Object.values(results.data))
      console.log('getData success')

    } catch (error) {
      console.log("getData error ", error)
      Alert.alert('Sinulla ei ole ilmoituksia!')
    }
  }

  const handleButtonAdClicket = (adid, userid) => {
    navigation.navigate('OwnAd', { adid, userid })
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
                      source={item.image && item.image != '' ? { uri: item.image } : null}
                    />
                    <View style={Styles.descriptionContainer1}>
                      <View style={Styles.descriptionContainer2}>
                        <View style={Styles.descriptionContainer3}>
                          <Text style={Styles.textStyle}>{item.header} </Text>
                          <Text style={Styles.textStyle}>Hinta {item.price}€</Text>
                          <Text style={Styles.textStyle}>{item.region}</Text>
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
