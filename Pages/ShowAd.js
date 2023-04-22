import React, { useEffect, useState, useCallback } from 'react';
import {Text, TextInput, View, ScrollView, Image, Pressable } from 'react-native';
import { StatusBar, hidden } from 'expo-status-bar';
import Styles from '../Styles/Styles';
import ButtonStyles from '../Styles/ButtonStyles';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import axios from 'axios';
import BASE_URL from '../json/BaseUrl';

export default function ShowAd({navigation, route}) {

    const [ad, setAd] = useState([]);
    const [page, setPage] = useState(1);
    const [total_rows, setTota_rows] = useState(0)


      // tämä hakee databasesta ilmoitukset.


      useEffect(() => { 
        getData(); 
      }, []); 

      const getData = async () => {
      try{   
      const results = await axios.get(''+BASE_URL+'/ad/'+route.params.adid+'')
      setAd(results.data)

      } catch (error){
        console.log("getAd error", error)
      }} 
 


  return (

    
    <View style={Styles.container}>
      <StatusBar style="light" translucent={true}/>
           <Header></Header>
      <View style={Styles.container2}>


         <ScrollView >
            <Text>Löysitkö etsimäsi?
            </Text>
          
           
                <View style={Styles.adContainer}>
                  <Pressable>
                    <Image 
                    style ={Styles.image}
                    source={ ad.image && ad.image != '' ? { uri: ad.image } : null }        
                    /> 
                  </Pressable>
                <View style={Styles.descriptionContainer1}>
                  <View style={Styles.descriptionContainer2}>
                    <View style={Styles.descriptionContainer3}>   
                      <Text style={Styles.textStyle}>{ad.header} </Text>
                      <Text style={Styles.textStyle}>Hinta {ad.price}€</Text>
                      <Text style={Styles.textStyle}>{ad.region}</Text> 
                     
                    </View>
                  </View>
                    <View style={Styles.descriptionContainer3}>
                      <Text>{ad.description}</Text>
                  </View>
                </View>  
              </View>
            
            
          
        </ScrollView>
          <View style={ButtonStyles.nextContainer}>
            <Pressable style={ButtonStyles.buttonSearch}
                onPress={() => previousAds()}
                >
              <Text style={ButtonStyles.buttonText}>Takaisin</Text>
            </Pressable>
              <View style={ButtonStyles.infoContainer}>
               <Text style={ButtonStyles.infoText}>Sivu {page}/{Math.ceil(total_rows/10)}   osumia {total_rows}</Text>
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
