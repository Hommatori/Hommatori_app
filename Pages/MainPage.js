import React, { useEffect, useState } from 'react';
import {Text, TextInput, View, ScrollView, Image } from 'react-native';
/* import {Image} from 'expo-image'; */
import Styles from './Styles';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import axios from 'axios';
//import ad from '../json/Testarray.json';  // json taulukko testiä varten
//import testImage from '../vasarat.jpg'; 
import DropDownPicker from 'react-native-dropdown-picker';

export default function MainPage({navigation}) {

    const [filteredAd, setFilteredAd] = useState([]);
    const [search, setSearch] = useState('');

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

  return (

    
    <View style={Styles.container}>
           <Header></Header>
      <View style={Styles.container2}>
   
    
        <View style={Styles.searchBoxContainer}>    
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
{/*               <TextInput style={Styles.textInputContainer2}
              placeholder="Alue" 
              />    */}

         
              <TextInput style={Styles.textInputContainer2}
              placeholder="Tyyppi"
              />    
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
                    <View style={Styles.priceContainer}>
                      
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
