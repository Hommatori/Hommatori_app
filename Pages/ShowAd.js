import React, { useEffect, useState, useCallback } from 'react';
import {Text, View, Image, Pressable, Alert, Linking } from 'react-native';
import { StatusBar, hidden } from 'expo-status-bar';
import Styles from '../Styles/ShowAdStyles';
import ButtonStyles from '../Styles/ButtonStyles';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import axios from 'axios';
import BASE_URL from '../json/BaseUrl';
import ViewAd from '../components/ViewAd';


export default function ShowAd({navigation, route}) {

    const [ad, setAd] = useState([]);
    const [publisher, setPublisher] = useState([]);
    const [page, setPage] = useState(1);
    const [total_rows, setTota_rows] = useState(0)
    const [userId, setUserId] = useState('14')


      // tämä hakee databasesta ilmoitukset.


      useEffect(() => { 
      //  getData(); 
      //  getPublisher();
      }, []); 

      const getData = async () => {
        
        try{   
        const results = await axios.get(BASE_URL+'/ad/'+route.params.adid)
        setAd(results.data)
       // console.log(results)

        } catch (error){
          console.log("getAd error", error)
        }} 

      const getPublisher = async () => {
        try{   
          const results = await axios.get(BASE_URL+'/userr/ad/'+userId)
          setPublisher(results.data)
          //console.log(results.data)
    
        } catch (error){
            console.log("getAd error", error)
        }} 


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


              <ViewAd ad={ad}/>
              <Pressable style={ButtonStyles.button}
               onPress={() => handleEmailPress()}
              >
                <Text style={ButtonStyles.buttonText}>Lähetä sähköposti</Text>
              </Pressable>
              <Pressable style={ButtonStyles.button}
               onPress={() => handlSmsPress()}
              >
                <Text style={ButtonStyles.buttonText}>Lähetä textiviesti</Text>
              </Pressable>
    

      </View>     
        <NavBar navigation={navigation}></NavBar>
    </View>

  );
}
