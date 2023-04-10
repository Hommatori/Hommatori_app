import React, { useEffect, useState, useCallback } from 'react';
import {Text, TextInput, View, ScrollView, Image } from 'react-native';
import { StatusBar, hidden } from 'expo-status-bar';
/* import {Image} from 'expo-image'; */
import Styles from '../Styles/Styles';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import axios from 'axios';
//import ad from '../json/Testarray.json';  // json taulukko testiä varten
//import testImage from '../vasarat.jpg'; 
import DropDownPicker from 'react-native-dropdown-picker';
import DATA from '../json/regions.json'
import DropdownStyles from '../Styles/DropdownStyles';
import regions from '../json/regions';
import Type from '../json/Type';

export default function MainPage({navigation}) {

    const [filteredAd, setFilteredAd] = useState([]);
    const [search, setSearch] = useState('');

    const [open, setOpen] = useState(false);
    const [region, setRegion] = useState(null);

    const [openAnother, setOpenAnother] = useState(false);
    const [type, setType] = useState(null);
    const [types, setTypes] = useState([]);

    const [testi, setTesti] = useState([]);
    

    // tarvii testitaulukon kanssa
/*     useEffect(() => {
      setFilteredAd(ad)
    }) */

  const [ad, setAd] = useState([]);

      // tämä hakee databasesta ilmoitukset.
    useEffect(() => {
    const getData = async () => {
    const results = await axios.get('http://hommatoriapi.azurewebsites.net/ad/')
    setAd(results.data);
    setFilteredAd(results.data);
    }
    getData();
  }, []);    

    // hakee ilmoitusten otsikoista vastaavuuksia paikallisesti
    const executeSearch = (search) => {
      const searchArray = ad.filter((item) => item.header.includes(search));
      setFilteredAd(searchArray);
      //console.log(items);
    }

    const onOpen = useCallback(() => {
      setOpenAnother(false);
    }, []);
    const onAnotherOpen = useCallback(() => {
      setOpen(false);
    }, []);

    //DropDownPicker.setListMode("SCROLLVIEW");


  return (

    
    <View style={Styles.container}>
      <StatusBar style="light" translucent={true}/>
           <Header></Header>
      <View style={Styles.container2}>

   
        <View style={Styles.searchBoxContainer1}>
          <View style={Styles.searchBoxContainer2}>    
            <View>
              <TextInput 
              style={Styles.textInputContainer1}
              placeholder="Syötä hakusana"
              onChangeText={(text => setSearch(text))}
              returnKeyType='search'
              onSubmitEditing={() => executeSearch(search) }
              />       
            </View>
            <View style={Styles.searchButtonContainer}>
              <View style={DropdownStyles.dropDawnList}>
              <DropDownPicker
                  style={DropdownStyles.dropDawn}        
                  placeholder="Paikkakunta"
                  listMode="MODAL"
                  //aukeaa modalina koska en saanut scrollaamaan. kaikki vaihtoehto uupuu
                  dropDownDirection="TOP"
                  dropDownContainerStyle={{
                    backgroundColor: "#dfdfdf",
                    borderColor: '#25db55',
                    borderRadius: 12,
                  }}
                  open={open}
                  setOpen={setOpen}
                  items={Object.keys(regions).map((item,index) => ({
                    value: index,
                    label: item
                  }))}
                />                
              </View>
              <View style={DropdownStyles.dropDawnList}>
                <DropDownPicker
                  style={DropdownStyles.dropDawn}        
                  placeholder="Tyyppi"
                  listMode="SCROLLVIEW"
                  //aukeaa modalina koska en saanut scrollaamaan. kaikki vaihtoehto uupuu
                  dropDownDirection="DOWN"
                  dropDownContainerStyle={{
                    backgroundColor: "#dfdfdf",
                    borderColor: '#25db55',
                    borderRadius: 12,
                  }}
                  open={openAnother}
                  setOpen={setOpenAnother}
                  items={Type.types.map((item,index) => ({
                    value: index,
                    label: item
                  }))}
                  
                />   
                </View>
            </View>
          </View>
        </View>
        
        <ScrollView >
          {
            filteredAd.map((item) => (
              <View style={Styles.adContainer} key={item.adid}>
                  <Image 
                  style ={Styles.image}
                  source={{ uri: item.image }}         
                  />
                <View style={Styles.descriptionContainer1}>
                  <View style={Styles.descriptionContainer2}>
                    <View style={Styles.descriptionContainer3}>   
                      <Text style={{fontSize:15, fontWeight: 'bold', }}>{item.header} </Text>
                      <Text style={{fontSize: 15,fontWeight: 'bold'}}>Hinta {item.price}€</Text>
                      <Text style={Styles.descriptionText}>{item.location}</Text>    
                     
                    </View>
                  </View>
                    <View style={Styles.descriptionContainer3}>
                      <Text>{item.description}</Text>
                  </View>
                </View>  
              </View>
            ))
          }
        </ScrollView> 
        
      </View>     
        <NavBar navigation={navigation}></NavBar>
    </View>

  );
}
