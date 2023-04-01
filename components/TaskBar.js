import { StatusBar } from 'expo-status-bar';
import React, { useEffect,useLayoutEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, Image, Modal, Pressable, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import Styles from '../Styles/Styles';
import HeaderStyles from '../Styles/HeaderStyles';
import FooterStyles from '../Styles/TaskBarStyles';
import SearchBoxStyles from '../Styles/SearchBoxStyles';
//import Footer from './Footer';
//import SearchBox from './SearchBox';

export default function TaskBar({navigation}) {

  return (

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
        </View> 


  );
}
