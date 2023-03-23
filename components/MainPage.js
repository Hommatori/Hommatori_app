import { StatusBar } from 'expo-status-bar';
import React, { useEffect,useLayoutEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import Styles from '../Styles';

export default function MainPage({navigation}) {

  const [testData, setTestData] = useState([]);

  // tässä luodaan testitaulukko
  useEffect(() => {
    const testArray = Array();
    for (let i=0; i<=30; i++) {
      testArray.push({id: i, name:  'Tarjotaan lumenluontia' + i, image: 'https://reactnative.dev/img/tiny_logo.png'});
    }
    setTestData(testArray);
  },[]) 

  useLayoutEffect( () => {
    navigation.setOptions({
        headerStyle: {
            //backroundColor: '#f0f0f0'
        },
        headerRight: () => (
            <Feather
                style={Styles.navButton}
                name="menu"
                size={24}
                color="black"
                //onPress={ () => navigation.navigate('Todo')}
            />  
            
        ),  
    }) 
}, [])

  return (

    <View style={Styles.container}>
      <View style={Styles.heading}>
        <Text style={Styles.font}>Tervetuloa hommatorille</Text>
        <View style={Styles.borders}>
        <TextInput 
            //style={Styles.searchBar}
            //onChangeText={}
            //value={}
        placeholder="Syötä hakusana"
        />       
        </View>
      </View>
      
      <ScrollView style={Styles.borders}>
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
    </View>

  );
}
