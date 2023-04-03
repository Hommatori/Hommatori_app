import React from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';
import AnnounceStyles from './AnnounceStyles';
import { TextInput } from 'react-native-gesture-handler';
import TaskBar from '../components/TaskBar';
import Header from '../components/Header';

export default function Announce({navigation}) {

      // Tämä ei ole käytössä
    return (
    
    <View style={AnnounceStyles.container}>

      <Header></Header>

        <View style={AnnounceStyles.property}>  
            <Text>Jätä ilmoitus</Text>
            <Text>Myytkö Vai Ostatko?</Text>
            <Text>Otsikko</Text>
            <TextInput style={AnnounceStyles.textInputContainer1}></TextInput>
            <Text>Kuvaus</Text>
            <TextInput 
              style={AnnounceStyles.textInputContainer2}
              multiline={true}
              textAlignVertical="top"
              >
            </TextInput>


        </View> 

      <TaskBar navigation={navigation}></TaskBar>

     </View>
   
    );
  }