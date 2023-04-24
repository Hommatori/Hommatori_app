import {React, useState, useEffect} from 'react';
import {View, Text, Pressable, Modal, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import BaseUrl from '../json/BaseUrl.json'
import axios from 'axios';



export default function Announce({navigation, }) {


    const [open, setOpen] = useState(false);
    const [region, setRegion] = useState('');
    const [type, setType] = useState('')
    const [header, setHeader] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState(0)
    const [municipality, setMunicipality] = useState('')
    const [price, setPrice] = useState('0')
    const [userId, setUserId] = useState('2')  //käyttäjäid tämä syötetään vielä käsin
    const [adid, setAdid] = useState('400') // id syötettävä vielä käsin
    const [modalVisible, setModalVisible] = useState(false);

/*     useEffect(() => {

      const data = async() => {
      const a = await AsyncStorage.getItem('user')
      console.log(decodeURIComponent(a))
      const b = JSON.parse(decodeURIComponent(a))
      console.log(b.id)
      }
      data();
    }) */

    const testi = async () => {
      console.log(AsyncStorage.getItem('user'))
    }

    const options = [
      {label: 'Myyn', value: 'joboffer'},
      {label: 'Ostan', value: 'jobseeker'},
    ] 

      const newAd = async() => {     
      try{                 

        const userCookie = await AsyncStorage.getItem('user');
        const sessionCookie = await AsyncStorage.getItem('session');
        
        if (!userCookie) {
        // Handle the case when the user cookie is not available
        // e.g., navigate to the login screen
          console.log('cookie not found')
         }
        
        const cookieHeader = `user=${userCookie}; session=${sessionCookie}`;
        
        await axios.post(BaseUrl+'/ad', {   
          type: type,
          header: header,
          description: description,
          location: location,
          price: price,
          userid: userId,
          region: region,
          municipality: municipality
        }, {
           headers: {Cookie: cookieHeader}
        })

        console.log('newAd created successfully')
        Alert.alert('Ilmoitus luotu!');
        console.log(cookieHeader)
          
      } catch(e) {
        console.log('newAd error', e)
      }
      } 

  
    return (
    
    <View style={AnnounceStyles.container}>
      <StatusBar style="light" translucent={true}/>
      <Header></Header>

        <View style={AnnounceStyles.property}>  
            <Text>Jätä ilmoitus</Text>
            <Text>Myytkö Vai Ostatko?</Text>
              <View style={AnnounceStyles.radioButton}>
                <RadioButton options={options} onPress={(value) => {setType(value)}} initialValue={0} />
              </View>
            <Text>Otsikko</Text>
            <TextInput style={AnnounceStyles.textInputContainer1}
              placeholder="Syötä otsikko"
              onChangeText={(text => setHeader(text))}
              returnKeyType='search'
              >
            </TextInput>
            <Text>Kuvaus</Text>
            <TextInput 
              style={AnnounceStyles.textInputContainer2}
              multiline={true}
              textAlignVertical="top"
              placeholder="Syötä kuvaus"
              onChangeText={(text => setDescription(text))}
              returnKeyType='search'
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
              returnKeyType='search'
            >
            </TextInput>
            <Text>Hinta</Text>
            <TextInput style={AnnounceStyles.textInputContainer1}
              placeholder="Syötä Hinta"
              onChangeText={(text => setPrice(text))}
              returnKeyType='search'
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
                  
                  items={Object.keys(regions).map((item,index) => ({
                    value: item,
                    label: item
                  }))}
                  value={region}
                  setValue={setRegion}
                />         
                       
              </View>

              <Pressable style={ButtonStyles.button}
                onPress={() => testi()}
              >
                <Text style={ButtonStyles.buttonText}>Lisää kuva</Text>
              </Pressable>

              <Pressable style={ButtonStyles.button}
                onPress={() => newAd()}
                >
                <Text style={ButtonStyles.buttonText}>Tallenna</Text>
              </Pressable>
            
           
        </View> 

      <NavBar navigation={navigation}></NavBar>

     </View>
   
    );
  }