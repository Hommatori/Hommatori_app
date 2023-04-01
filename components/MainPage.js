import { StatusBar } from 'expo-status-bar';
import React, { useEffect,useLayoutEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, Image, Modal, Pressable, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import Styles from './Styles';
//import Footer from './Footer';
//import SearchBox from './SearchBox';

export default function MainPage({navigation}) {

  const [testData, setTestData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // tässä luodaan testitaulukko
  useEffect(() => {
    const testArray = Array();
    for (let i=0; i<=30; i++) {
      testArray.push({id: i, name:  'Tarjotaan lumenluontia' + i, image: 'https://reactnative.dev/img/tiny_logo.png'});
    }
    setTestData(testArray);
  },[]) 

  return (

    
    <View style={Styles.container}>

      <View style={Styles.header}>
        <Text>Hommatori</Text>
      </View>
  
      <View style={Styles.searcBoxContainer}>    
        <View>
          <View>
            <TextInput style={Styles.textInputContainer1}
            placeholder="Syötä hakusana"
            />       
          </View>
          <View style={Styles.searchButtonContainer}>
            <TextInput style={Styles.textInputContainer2}
            placeholder="Postinumero"
            />    
            <TextInput style={Styles.textInputContainer2}
            placeholder="Varaus"
            />    
          </View>
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

      <View style={Styles.buttonContainer}>
          <Pressable style={Styles.button}
            onPress={() => navigation.navigate('MainPage')}
          >
            <Text style={Styles.buttonText}>Haku</Text>
          </Pressable>
          <Pressable style={Styles.button} 
            onPress={() => navigation.navigate('Announce')} 
          >
            <Text style={Styles.buttonText}>Ilm.</Text>
          </Pressable>
          <Pressable style={Styles.button}>
            <Text style={Styles.buttonText}>Viestit</Text>
          </Pressable>
          <Pressable style={Styles.button}>
            <Text style={Styles.buttonText}>Tili</Text>
          </Pressable>
        </View> 

    </View>

  );
}
