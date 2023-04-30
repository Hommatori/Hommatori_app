import { React, useState, useEffect } from 'react';
import { View, Text, Pressable, Modal, Alert } from 'react-native';
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



export default function Announce({ navigation }) {


  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState('');
  const [type, setType] = useState('')
  const [header, setHeader] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState(0)
  const [municipality, setMunicipality] = useState('')
  const [price, setPrice] = useState('0')
  const [adid, setAdid] = useState('400') // id syötettävä vielä käsin
  const [modalVisible, setModalVisible] = useState(false);
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await SecureStore.getItemAsync('accessToken');
        const user = await SecureStore.getItemAsync('userData');
        const userObject = JSON.parse(user);
        const config = {
          headers: {
            Authorization: `Basic ${accessToken}`
          }
        };
        const response = await axios.get(`${BASE_URL}/userr/getprivatedata/${userObject.id}`, config);
        setUserData(response.data);
        //setUserId(response.data.userid)
        //console.log(response.data.userid.toString())
      } catch (error) {
        console.error(error);
        Alert.alert('Error fetching data');
      }
    };
    fetchData();
  }, []);

  const options = [
    { label: 'Myyn', value: 'joboffer' },
    { label: 'Ostan', value: 'jobseeker' },
  ]

  const newAd = async () => {

    const accessToken = await SecureStore.getItemAsync('accessToken');

    try {
      await axios.post(BASE_URL + '/ad', {
        type: type,
        header: header,
        description: description,
        location: location,
        price: price,
        userid: userData.userid.toString(),
        region: region,
        municipality: municipality
      }, {
        headers: { Authorization: 'Bearer' + accessToken }
      })

      console.log('newAd created successfully')
      Alert.alert('Ilmoitus luotu!');
      //console.log(cookieHeader)

    } catch (e) {
      console.log('newAd error', e)
      Alert.alert('Ilmoituksen luonti epäonnistui!')
    }
  }

  const handelSaveClicked = () => {
    newAd()
    navigation.navigate('LoggedIn')
  }

  return (

    <View style={AnnounceStyles.container}>
      <StatusBar style="light" translucent={true} />
      <Header></Header>

      <View style={AnnounceStyles.property}>
        <Text>Jätä ilmoitus</Text>
        <Text>Myytkö Vai Ostatko?</Text>
        <View style={AnnounceStyles.radioButton}>
          <RadioButton options={options} onPress={(value) => { setType(value) }} initialValue={0} />
        </View>
        <Text>Otsikko</Text>
        <TextInput style={AnnounceStyles.textInputContainer1}
          placeholder="Syötä otsikko"
          onChangeText={(text => setHeader(text))}
        >
        </TextInput>
        <Text>Kuvaus</Text>
        <TextInput
          style={AnnounceStyles.textInputContainer2}
          multiline={true}
          textAlignVertical="top"
          placeholder="Syötä kuvaus"
          onChangeText={(text => setDescription(text))}
        >
        </TextInput>
        <Text>Kunta</Text>
        <TextInput style={AnnounceStyles.textInputContainer1}
          placeholder="Syötä kunta"
          onChangeText={(text => setMunicipality(text))}
          returnKeyType='search'
        >
        </TextInput>
        <Text>Postinumero</Text>
        <TextInput style={AnnounceStyles.textInputContainer1}
          placeholder="Syötä postinumero"
          onChangeText={(text => setLocation(text))}
          keyboardType='numeric'
        >
        </TextInput>
        <Text>Hinta</Text>
        <TextInput style={AnnounceStyles.textInputContainer1}
          placeholder="Syötä Hinta"
          onChangeText={(text => setPrice(text))}
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

        {/* <Pressable style={ButtonStyles.button} >
          <Text style={ButtonStyles.buttonText}>Lisää kuva</Text>
        </Pressable> */}

        <Pressable style={ButtonStyles.button}
          onPress={() => handelSaveClicked()}
        >
          <Text style={ButtonStyles.buttonText}>Tallenna</Text>
        </Pressable>


      </View>

      <NavBar navigation={navigation}></NavBar>

    </View>

  );
}