import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, ScrollView, Image, Pressable, Alert, Keyboard, TouchableWithoutFeedback, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Styles from '../Styles/Styles';
import ButtonStyles from '../Styles/ButtonStyles';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import axios from 'axios';
import BASE_URL from '../json/BaseUrl';
import SearchBox from '../components/SearchBox';

// sivu joka näyttää kaikki tai filtteröidyt ilmoitukset
export default function MainPage({ navigation }) {

  const [ads, setAds] = useState([]);
  const [page, setPage] = useState(1);
  const [total_rows, setTota_rows] = useState(0)
  const [region, setRegion] = useState('');
  const [type, setType] = useState('');
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState('1')

  useEffect(() => {
    getData(type, region, filter, page, searchText);
  }, [page]);

  const getData = async (type, region, filter, page, searchText) => {
    //haetaan parametrien mukaiset ilmoitukset 10kpl
    console.log('getdata', region)
    try {
      const results = await axios.get(BASE_URL + '/ad/withparams/get?type=' + type + '&region=' + region + '&order=' + filter + '&page=' + page + '&query=' + searchText + '')
      setAds(Object.values(results.data.data))
      setTota_rows(results.data.total_rows)
      console.log('getData success')

    } catch (error) {
      console.log("getData error ", error)
      Alert.alert('Ei hakutuloksia!')
    }
  }

  const nextAds = async () => {                                    //tässä lisätään offsettia jotta saadaan seuraava sivu
    const pages = Math.ceil(total_rows / 10)
    if (page < pages) {
      setPage(page + 1);
      getData(type, region, filter, page, searchText);
    }
  }
  const previousAds = async () => {                              // tässä vähennetään offsettia nollaan asti jotta saadaan aiempi sivu
    if (page > 1) {
      setPage(page - 1);
      getData(type, region, filter, page, searchText);
    }
  }

  const handleButtonAdClicket = (adid, userid) => {               //kun painetaan ilmoitusta, avataan seuraava sivu
    navigation.navigate('ShowAd', { adid, userid })
  }

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={Styles.container}>
        <StatusBar style="light" translucent={true} />
        <Header></Header>
        <View style={Styles.container2}>
          <SearchBox getData={getData} />
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
          <View style={ButtonStyles.nextContainer}>
            <Pressable style={ButtonStyles.buttonSearch}
              onPress={() => previousAds()}
            >
              <Text style={ButtonStyles.buttonText}>Takaisin</Text>
            </Pressable>
            <View style={ButtonStyles.infoContainer}>
              <Text style={ButtonStyles.infoText}>Sivu {page}/{Math.ceil(total_rows / 10)}   osumia {total_rows}</Text>
            </View>
            <Pressable style={ButtonStyles.buttonSearch}
              onPress={() => nextAds()}
            >
              <Text style={ButtonStyles.buttonText}>Seuraava</Text>
            </Pressable>
          </View>
        </View>
        <NavBar navigation={navigation}></NavBar>
      </View>
    </TouchableWithoutFeedback>
  );
}