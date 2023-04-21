import React from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import MessageStyles from '../Styles/MessageStyles';
import ButtonStyles from '../Styles/ButtonStyles';
import { TextInput } from 'react-native-gesture-handler';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import { StatusBar, hidden } from 'expo-status-bar';
import TestMessages from '../json/TestMessages';

export default function Messages({navigation}) {


    return (
    
    <View style={MessageStyles.container}>
      <StatusBar style="light" translucent={true}/>
      <Header></Header>

        <View style={MessageStyles.property}> 
            <View style={MessageStyles.property2}>
                <Text style={MessageStyles.headerText}>Viestit</Text>
            </View>
                <ScrollView >
            {
                Object.values(TestMessages).map((item, index) =>(
                <View style={MessageStyles.messageContainer}>
                    
                    <Text style={MessageStyles.textStyle}>{item.header}</Text>

                    <Text style={MessageStyles.textStyle}>{item.message}</Text>
                </View>
                ))
                
            }
                </ScrollView>
           



            
            <Pressable style={ButtonStyles.button}
                onPress={() => navigation.navigate('WriteMessage')}
                >
                <Text style={ButtonStyles.buttonText}>Kirjoita viesti</Text>
              </Pressable>

        </View> 

      <NavBar navigation={navigation}></NavBar>

     </View>
   
    );
  }