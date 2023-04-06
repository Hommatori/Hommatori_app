import React, { useEffect, useState } from 'react';
import {Text, TextInput, View, ScrollView, Image } from 'react-native';
/* import {Image} from 'expo-image'; */
import Styles from './Styles';
import TaskBar from '../components/TaskBar';
import Header from '../components/Header';
import axios from 'axios';
import ad from '../Testarray.json';  // json taulukko testiä varten
import testImage from '../vasarat.jpg'; 

export default function MainPage({navigation}) {

/*  const [ad, setAd] = useState([]);

     useEffect(() => {
    const getData = async () => {
    const results = await axios.get('http://hommatoriapi.azurewebsites.net/ad/1')
    setAd(results.data);
    }
    getData();
  }, []);  */

  //console.log(ad)

  return (

    
    <View style={Styles.container}>
           <Header></Header>
      <View style={Styles.container2}>
   
    
        <View style={Styles.searchBoxContainer}>    
            <View>
              <TextInput style={Styles.textInputContainer1}
              placeholder="Syötä hakusana"
              />       
            </View>
            <View style={Styles.searchButtonContainer}>
              <TextInput style={Styles.textInputContainer2}
              placeholder="Alue"
              />    
              <TextInput style={Styles.textInputContainer2}
              placeholder="Tyyppi"
              />    
            </View>
      </View>
        
        <ScrollView >
          {
            ad.map((item) => (
              <View style={Styles.adContainer} key={item.adid}>
                  <Image 
                  style ={Styles.image}
                  source={{ uri: item.image }}         
                  />
                <View style={Styles.descriptionContainer1}>
                  <View style={Styles.descriptionContainer2}>
                    <View style={Styles.descriptionContainer3}>
                      <Text style={Styles.descriptionText}> {item.type} </Text>       
                      <Text style={Styles.descriptionText}>{item.header} </Text>
                      <Text style={Styles.descriptionText}>{item.location}</Text>    
                    </View>
                    <View style={Styles.priceContainer}>
                      <Text style={Styles.descriptionText}>Hinta {item.price}€</Text>
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
        <TaskBar navigation={navigation}></TaskBar>
    </View>

  );
}
