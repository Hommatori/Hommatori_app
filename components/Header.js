import { StatusBar } from 'expo-status-bar';
import React, { useEffect,useLayoutEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, Image, Modal, Pressable, Button, } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import Styles from '../Styles/Styles';
import HeaderStyles from '../Styles/HeaderStyles';
import FooterStyles from '../Styles/NavBarStyles';
//import Footer from './Footer';
//import SearchBox from './SearchBox';

export default function Header({navigation}) {


  return (

    <View style={HeaderStyles.header}>
        <Text style={HeaderStyles.headerText}>Hommatori</Text>
    </View>

  );
}
