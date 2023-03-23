import { StatusBar } from 'expo-status-bar';
import React, { useEffect,useLayoutEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, Image, Modal, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import Styles from '../Styles';

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

  // yläPalkki
  useLayoutEffect( () => {
    navigation.setOptions({
        headerStyle: {
            //backroundColor: '#f0f0f0'
            //fontSize: 30,
        },
        headerRight: () => (
            <Feather
                style={Styles.navButton}
                name="menu"
                size={24}
                color="black"
                onPress={ () => setModalVisible(true)}
            />  
            
        ),  
    }) 
}, [])

//tämä funktio sulkee modalin
function closeModal() {
  setModalVisible(false);
}

  return (

    
    <View style={Styles.container}>
      <Modal 
      visible={modalVisible}
      onRequestClose ={closeModal}
      >
        <View style={Styles.modal}>
          <Text> Mitä haluaisit tehdä?</Text>
          <Pressable onPress={() => {
            setModalVisible(false);
          }}>
            <Text style={Styles.modalItem}>Ilmoita</Text>
            </Pressable>
            <Pressable onPress={() => {
            setModalVisible(false);
          }}>
            <Text style={Styles.modalItem}>Asetukset</Text>
            </Pressable>
            <Pressable onPress={() => {
            setModalVisible(false);
          }}>
            <Text style={Styles.modalItem}>Peruuta</Text>
            </Pressable>
        </View>
      </Modal>

      <View style={Styles.heading}>
        <Text style={Styles.font}>Onko remontti tekemättä?</Text>
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
