import { StatusBar } from 'expo-status-bar';
import React, { useEffect,useLayoutEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, Image, Modal, Pressable, Button, } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import NavBarStyles from '../Styles/NavBarStyles';

export default function NavBar({navigation}) {


  return (

      <View style={NavBarStyles.buttonContainer}>
          <Pressable style={NavBarStyles.button}
            onPress={() => navigation.navigate('MainPage')}
            >
            <Text style={NavBarStyles.buttonText}>Haku</Text>
          </Pressable>
          <Pressable style={NavBarStyles.button} 
            onPress={() => navigation.navigate('Announce')} 
            >
            <Text style={NavBarStyles.buttonText}>Ilmoita</Text>
          </Pressable>
          <Pressable style={NavBarStyles.button}
            onPress={() => navigation.navigate('Messages')}
            >
            <Text style={NavBarStyles.buttonText}>Viestit</Text>
          </Pressable>
          <Pressable style={NavBarStyles.button}
            onPress={() => navigation.navigate('Account')}
            >
            <Text style={NavBarStyles.buttonText}>Tili</Text>
          </Pressable>
        </View> 


  );
}
