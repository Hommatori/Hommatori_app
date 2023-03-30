import { StatusBar } from 'expo-status-bar';
import React, { useEffect,useLayoutEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, Image, Modal, Pressable, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import Styles from './Styles';
import Footer from './Footer';
import SearchBox from './SearchBox';

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
      
      <SearchBox></SearchBox>
      
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


      <Footer></Footer>
      
 

    </View>

  );
}
