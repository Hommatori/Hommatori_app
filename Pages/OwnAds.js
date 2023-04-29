import React, { useEffect, useState, useCallback } from 'react';
import { Text, TextInput, View, ScrollView, Image, Pressable, Alert } from 'react-native';
import { StatusBar, hidden } from 'expo-status-bar';
import Styles from '../Styles/OwnAdsStyles';
import ButtonStyles from '../Styles/ButtonStyles';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
import DropdownStyles from '../Styles/DropdownStyles';
import regions from '../json/regions';
import Type from '../json/Type';
import BASE_URL from '../json/BaseUrl';

export default function OwnAds({ navigation, route }) {

  const [open, setOpen] = useState(false);
  const [openAnother, setOpenAnother] = useState(false);
  const [ad, setAd] = useState([]);
  const [ads, setAds] = useState([]);
  const [page, setPage] = useState(1);
  const [total_rows, setTota_rows] = useState(0)
  const [region, setRegion] = useState('');
  const [type, setType] = useState('');
  const [types, setTypes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [id, setId] = useState('')


  useEffect(() => {
    getData();
    console.log(route.params.userId)
  }, [page]);

  // tämä hakee databasesta ilmoitukset.
  const getData = async () => {
    try {
      const results = await axios.get('' + BASE_URL + '/ad/withparams/get?type=' + type + '&region=' + region + '&order=&page=' + page + '&query=' + searchText + '')
      setAds(Object.values(results.data.data))
      setTota_rows(results.data.total_rows)
      console.log('getData success')

    } catch (error) {
      console.log("getData error ", error)
      Alert.alert('Haku epännostui!')
    }
  }

  //tässä lisätään offsettia jotta saadaan seuraava sivu
  const nextAds = async () => {
    const pages = Math.ceil(total_rows / 10)
    if (page < pages) {
      setPage(page + 1);
      getData();
    }
  }
  // tässä vähennetään offsettia nollaan asti jotta saadaan aiempi sivu
  const previousAds = async () => {
    if (page > 1) {
      setPage(page - 1);
      getData();
    }
  }

  const handleButtonAdClicket = (adid) => {
    navigation.navigate('OwnAd', { adid })
  }

  return (
    <View style={Styles.container}>
      <StatusBar style="light" translucent={true} />
      <Header></Header>
      <View style={Styles.container2}>
        <Text style={Styles.headerTextStyle}> Omat ilmoitukset </Text>

        <ScrollView style={Styles.scrollViewStyle}>
          {
            Object.values(ads).map((item, index) => (
              <Pressable key={index} onPress={(() => handleButtonAdClicket(item.adid))}>
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

  );
}
