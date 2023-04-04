import React, { useEffect, useState } from 'react';
import {Text, TextInput, View, ScrollView, Image } from 'react-native';
import Styles from './Styles';
import TaskBar from '../components/TaskBar';
import Header from '../components/Header';
import axios from 'axios';
// import testData from '../Testarray2.json';  // json taulukko testiä varten

export default function MainPage({navigation}) {

  const [product, setProduct] = useState([]);

    useEffect(() => {
    const getData = async () => {
    const results = await axios.get('http://hommatoriapi.azurewebsites.net/ad/1')
    setProduct(results.data);
    }
    getData();
  }, []); 

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
            product.map((item) => (
              <View style={Styles.rowContainer} key={item.adid}>
                <Text style={Styles.rowText}> 
                  {item.type} 
                  {item.header}
                  {item.description}
                  {item.location}
                  {item.price}
                  {item.date}
                  {item.region}
                  {item.municipality}
                </Text>
              </View>
            ))
          }
        </ScrollView>
        
      </View>     
        <TaskBar navigation={navigation}></TaskBar>
    </View>

  );
}
