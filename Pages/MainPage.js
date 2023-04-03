import React, { useEffect, useState } from 'react';
import {Text, TextInput, View, ScrollView, Image } from 'react-native';
import Styles from './Styles';
import TaskBar from '../components/TaskBar';
import Header from '../components/Header';

export default function MainPage({navigation}) {

  const [testData, setTestData] = useState([]);

  // tässä luodaan testitaulukko
  useEffect(() => {
    const testArray = Array();
    for (let i=0; i<=20; i++) {
      testArray.push({id: i, name:  'Tarjotaan lumenluontia' + i, image: 'https://reactnative.dev/img/tiny_logo.png'});
    }
    setTestData(testArray);
  },[]) 

  return (

    
    <View style={Styles.container}>

      <Header></Header>
  
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
          testData.map((item) => (
            <View style={Styles.rowContainer} key={item.id}>
              <Image
              source={{
                uri: item.image,
                width: 100,
                height: 100,
              }}
              />
              <Text style={Styles.rowText}>{item.name}</Text>
            </View>
          ))
        }
      </ScrollView>

    <TaskBar navigation={navigation}></TaskBar>

    </View>

  );
}
