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
    getDataByUserId()
  }, []);

  // tämä hakee databasesta ilmoitukset.
  const getDataByUserId = async () => {
    try {
      const results = await axios.get(BASE_URL+'/ad/withuserid/get/?userid='+route.params.userId)
      setAds(Object.values(results.data))
      setTota_rows(results.data.total_rows)
      console.log('getData success')
      
    } catch (error) {
      console.log("getData error ", error)
      Alert.alert('Sinulla ei ole ilmoituksia!')
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

  const handleButtonAdClicket = (adid, userid) => {
    navigation.navigate('OwnAd', { adid, userid })
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

  );
}
