import { StatusBar } from 'expo-status-bar';
import React, { useEffect,useLayoutEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, Image, Modal, Pressable, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import Styles from '../Styles/Styles';
import HeaderStyles from '../Styles/HeaderStyles';
import FooterStyles from '../Styles/TaskBarStyles';
import SearchBoxStyles from '../Styles/SearchBoxStyles';
import TaskBar from './TaskBar';
//import Footer from './Footer';
//import SearchBox from './SearchBox';

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

      <View style={HeaderStyles.header}>
        <Text style={HeaderStyles.headerText}>Hommatori</Text>
      </View>
  
      <View style={SearchBoxStyles.searcBoxContainer}>    
          <View>
            <TextInput style={SearchBoxStyles.textInputContainer1}
            placeholder="Syötä hakusana"
            />       
          </View>
          <View style={SearchBoxStyles.searchButtonContainer}>
            <TextInput style={SearchBoxStyles.textInputContainer2}
            placeholder="Alue"
            />    
            <TextInput style={SearchBoxStyles.textInputContainer2}
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



    <TaskBar></TaskBar>


{/*
      <View style={FooterStyles.buttonContainer}>
          <Pressable style={FooterStyles.button}
            onPress={() => navigation.navigate('MainPage')}
          >
            <Text style={FooterStyles.buttonText}>Haku</Text>
          </Pressable>
          <Pressable style={FooterStyles.button} 
            onPress={() => navigation.navigate('Announce')} 
          >
            <Text style={FooterStyles.buttonText}>Ilmoita</Text>
          </Pressable>
          <Pressable style={FooterStyles.button}>
            <Text style={FooterStyles.buttonText}>Viestit</Text>
          </Pressable>
          <Pressable style={FooterStyles.button}>
            <Text style={FooterStyles.buttonText}>Tili</Text>
          </Pressable>
        </View>  */}

    </View>

  );
}
