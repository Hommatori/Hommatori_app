import React, { useEffect, useState, useCallback } from 'react';
import {Text, View, Image, Pressable, Alert, Linking } from 'react-native';
import { StatusBar, hidden } from 'expo-status-bar';
import Styles from '../Styles/OwnAdStyles';
import ButtonStyles from '../Styles/ButtonStyles';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import axios from 'axios';
import BASE_URL from '../json/BaseUrl';
import * as SecureStore from 'expo-secure-store';


export default function OwnAd({navigation, route}) {

    const [ad, setAd] = useState([]);
    const [page, setPage] = useState(1);
    const [total_rows, setTota_rows] = useState(0)


      // tämä hakee databasesta ilmoitukset.


      useEffect(() => { 
        getData(); 
      }, []); 

      const getData = async () => { 
      try{   
      const results = await axios.get(BASE_URL+'/ad/'+route.params.adid)
      setAd(results.data)
      //console.log(results)

      } catch (error){
        console.log("getAd error", error)
      }} 

      const deleteAd = async () => {
        try {
          const accessToken = await SecureStore.getItemAsync('accessToken');
          await axios.delete(BASE_URL + '/ad/' + route.params.adid, {
            headers: { Authorization: 'Bearer ' + accessToken }
          });
          console.log('ad removed successfully');
          Alert.alert('Ilmoitus poistettu!');
        } catch (error) {
          console.log('error occurred in removing ad', error);
          Alert.alert('Ilmoituksen poistaminen epäonnistui!');
        }
      };


  return (

    
    <View style={Styles.container}>
      <StatusBar style="light" translucent={true}/>
           <Header></Header>
      <View style={Styles.container2}>
                <View style={Styles.adContainer}>
                  <View style={{alignItems: 'center'}}>
                    <Image 
                    style ={Styles.image}
                    source={ ad.image && ad.image != '' ? { uri: ad.image } : null }        
                    /> 
                    {/* <Pressable style={ButtonStyles.buttonDelete}
                      onPress={() => deleteAd()}
                    >
                      <Text>Poista</Text>
                    </Pressable> */}
                  </View>
                <View style={Styles.descriptionContainer1}>
                  <View style={Styles.descriptionContainer2}>
       
                      <Text style={Styles.AdHeaderTextStyle}>{ad.header} </Text>

                    <View style={Styles.descriptionContainer3}>
                      <Text style={Styles.textStyle}>Nimi</Text>   
                      <Text style={Styles.textStyle}>Puhelinumero</Text>  
                      <Text style={Styles.textStyle}>Sähköposti</Text>    
                    </View>
                    <View style={Styles.descriptionContainer3}>
                      <Text style={Styles.textStyle}>{ad.region}</Text>
                      <Text style={Styles.textStyle}>{ad.municipality} </Text>
                    </View>
                    <View style={Styles.descriptionContainer3}>
                      <Text style={Styles.textStyle}>{ad.type}€</Text>
                      <Text style={Styles.textStyle}>Hinta {ad.price}€</Text>
                    </View>
                    <View style={Styles.descriptionContainer3}>
                      <Text>{ad.description}</Text>
                    </View>
                  </View>
                </View>  
              </View>
              <Pressable style={ButtonStyles.button}
                onPress={() => deleteAd()}
              >
                <Text style={ButtonStyles.buttonText}>Poista</Text>
              </Pressable>
              <Pressable style={ButtonStyles.button}
               //onPress={() => handleEmailPress()}
              >
                <Text style={ButtonStyles.buttonText}>Muokkaa</Text>
              </Pressable>
              <Pressable style={ButtonStyles.button}
               //onPress={() => handlSmsPress()}
              >
                <Text style={ButtonStyles.buttonText}>Tallenna</Text>
              </Pressable>
    

      </View>     
        <NavBar navigation={navigation}></NavBar>
    </View>

  );
}
