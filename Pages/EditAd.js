import { React, useState, useEffect } from 'react';
import { View, Text, Pressable, Alert, Keyboard, TouchableWithoutFeedback, } from 'react-native';
import AnnounceStyles from '../Styles/AnnounceStyles';
import { TextInput } from 'react-native-gesture-handler';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import { StatusBar, hidden } from 'expo-status-bar';
import RadioButton from '../components/RadioButton';
import DropDownPicker from 'react-native-dropdown-picker';
import DropdownStyles from '../Styles/DropdownStyles';
import ButtonStyles from '../Styles/ButtonStyles';
import regions from '../json/regions.json';
import BASE_URL from '../json/BaseUrl.json'
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';



export default function EditAd({ navigation, route }) {

  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState('');
  const [type, setType] = useState('')
  const [ad, setAd] = useState('')

  useEffect(() => {
    getData();
  }, []);

  const options = [
    { label: 'Myyn', value: 'joboffer' },
    { label: 'Ostan', value: 'jobseeker' },
  ]


  const getData = async () => {
    try {
      const results = await axios.get(BASE_URL + '/ad/' + route.params.adid)
      setAd(results.data)
      //console.log(results.data)

    } catch (error) {
      console.log("getAd error", error)
    }
  }

  const updateAd = async () => {

    const accessToken = await SecureStore.getItemAsync('accessToken');
    console.log(ad.header)
    try {
      await axios.put(BASE_URL + '/ad/' + route.params.adid, {
        type: type,
        header: ad.header,
        description: ad.description,
        location: ad.location,
        price: ad.price,
        userid: route.params.userid.toString(),
        region: region,
        municipality: ad.municipality
      }, {
        headers: { Authorization: 'Bearer' + accessToken }
      })

      console.log('Ad updated successfully')
      Alert.alert('ilmoitus Päivitetty!');
      //console.log(cookieHeader)

    } catch (e) {
      console.log('update ad error', e)
      Alert.alert('Ilmoituksen päivitys epäonnistui!')
    }
  }

  const handelSaveClicked = () => {
    updateAd()
    navigation.navigate('LoggedIn')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={AnnounceStyles.container}>
        <StatusBar style="light" translucent={true} />
        <Header></Header>
        <View style={AnnounceStyles.property}>
          <Text>Muokkaa ilmoitusta</Text>
          <Text>Myytkö Vai Ostatko?</Text>
          <View style={AnnounceStyles.radioButton}>
            <RadioButton options={options} onPress={(value) => { setType(value) }} initialValue={ad.type} />
          </View>
          <Text>Otsikko</Text>
          <TextInput style={AnnounceStyles.textInputContainer1}
            placeholder="Syötä otsikko"
            value={ad.header}
            onChangeText={(text) => {
              setAd({ ...ad, header: text }); // update the ad object
            }}
          >
          </TextInput>
          <Text>Kuvaus</Text>
          <TextInput
            style={AnnounceStyles.textInputContainer2}
            multiline={true}
            textAlignVertical="top"
            placeholder="Syötä kuvaus"
            value={ad.description}
            onChangeText={(text) => {
              setAd({ ...ad, description: text });
            }}
          >
          </TextInput>
          <Text>Kunta</Text>
          <TextInput style={AnnounceStyles.textInputContainer1}
            placeholder="Syötä kunta"
            value={ad.municipality}
            onChangeText={(text) => {
              setAd({ ...ad, municipality: text });
            }}
            returnKeyType='search'
          >
          </TextInput>
          <Text>Postinumero</Text>
          <TextInput style={AnnounceStyles.textInputContainer1}
            placeholder="Syötä postinumero"
            value={ad.location}
            onChangeText={(text) => {
              setAd({ ...ad, location: text });
            }}
            keyboardType='numeric'
          >
          </TextInput>
          <Text>Hinta</Text>
          <TextInput style={AnnounceStyles.textInputContainer1}
            placeholder="Syötä Hinta"
            value={ad.price}
            onChangeText={(text) => {
              setAd({ ...ad, price: text });
            }}
            keyboardType='numeric'
          >
          </TextInput>
          <View style={DropdownStyles.dropDawnList2}>
            <DropDownPicker
              style={DropdownStyles.dropDawn}
              placeholder="Paikkakunta"
              listMode="MODAL"
              //   aukeaa modalinakoska en saanut scrollaamaan, kaikki vaihtoehto uupuu
              dropDownDirection="TOP"
              dropDownContainerStyle={{
                backgroundColor: "#dfdfdf",
                borderColor: '#25db55',
                borderRadius: 12,
              }}
              open={open}
              setOpen={setOpen}
              items={Object.keys(regions).map((item, index) => ({
                value: item,
                label: item
              }))}
              value={region}
              setValue={setRegion}
            />
          </View>
          <Pressable style={ButtonStyles.button}
            onPress={() => handelSaveClicked()} >
            <Text style={ButtonStyles.buttonText}>Tallenna</Text>
          </Pressable>

          <Pressable style={ButtonStyles.button}
            onPress={() => navigation.goBack()} >
            <Text style={ButtonStyles.buttonText}>Peruuta</Text>
          </Pressable>

        </View>
        <NavBar navigation={navigation}></NavBar>
      </View>
    </TouchableWithoutFeedback>
  );
}