import React, { useEffect, useState, useCallback } from 'react';
import {Text, View, Image, Pressable, Alert, Linking } from 'react-native';
import { StatusBar, hidden } from 'expo-status-bar';
import Styles from '../Styles/OwnAdStyles';
import ButtonStyles from '../Styles/ButtonStyles';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import axios from 'axios';
import BASE_URL from '../json/BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
        try{
        const userCookie = await AsyncStorage.getItem('user');
        const sessionCookie = await AsyncStorage.getItem('session');
        
          if (!userCookie) {
          // Handle the case when the user cookie is not available
          // e.g., navigate to the login screen
            console.log('cookie not found')
          }

        const cookieHeader = `user=${userCookie}; session=${sessionCookie}`;
        
          await axios.delete(BASE_URL+'/ad/'+route.params.adid, {
            headers: {Cookie: cookieHeader}
          })
            console.log('ad removed sucesfully');
            Alert.alert('Ilmoitus poistettu!')

         } catch(error) {
            console.log('error ocured in removing ad', error);
            Alert.alert('Ilmoituksen poistaminen epäonnistui!')
          };
 
      }

      const handleEmailPress = () => {
        const email = 'example@example.com';
        try{
        Linking.openURL(`mailto:${email}`);
        }catch(e){
          console.log(e)
        }
      }
      const handlSmsPress = () => {
        const number = '040123123';
        try{
        Linking.openURL(`sms:${number}`);
        }catch(e){
          console.log(e)
        }
      }

// Then you can use the handleEmailPress function as an onPress handler in your component


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
