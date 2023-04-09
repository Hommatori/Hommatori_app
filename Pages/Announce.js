import {React, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import AnnounceStyles from '../Styles/AnnounceStyles';
import { TextInput } from 'react-native-gesture-handler';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import { StatusBar, hidden } from 'expo-status-bar';
import RadioButton from '../components/RadioButton';
import DropDownPicker from 'react-native-dropdown-picker';
import DropdownStyles from '../Styles/DropdownStyles';
import ButtonStyles from '../Styles/ButtonStyles';




export default function Announce({navigation}) {

    const [test, setText] = useState(0)

    const [open, setOpen] = useState(false);
    const [region, setRegion] = useState(null);
    const [regions, setRegions] = useState([]);

    const options = [
      {label: 'Myyn', value: 1},
      {label: 'Ostan', value: 2},
    ]

    return (
    
    <View style={AnnounceStyles.container}>
      <StatusBar style="light" translucent={true}/>
      <Header></Header>

        <View style={AnnounceStyles.property}>  
            <Text>Jätä ilmoitus</Text>
            <Text>Myytkö Vai Ostatko?</Text>
              <View style={AnnounceStyles.radioButton}>
                <RadioButton options={options} onPress={(value) => {setText(value)}} initialValue={1} />
              </View>
            <Text>Otsikko</Text>
            <TextInput style={AnnounceStyles.textInputContainer1}></TextInput>
            <Text>Kuvaus</Text>
            <TextInput 
              style={AnnounceStyles.textInputContainer2}
              multiline={true}
              textAlignVertical="top"
              >
            </TextInput>
            <Text>Hinta</Text>
            <TextInput style={AnnounceStyles.textInputContainer1}></TextInput>
        
            <View style={DropdownStyles.dropDawnList2}>
                <DropDownPicker
                  style={DropdownStyles.dropDawn}
                  placeholder="Paikkakunta"
                  open={open}
                  value={region}
                  items={regions}
                  setOpen={setOpen}
                  setValue={setRegion}
                  setItems={setRegions}     
                />
              </View>

              <Pressable style={ButtonStyles.button}>
                <Text style={ButtonStyles.buttonText}>Tallenna</Text>
              </Pressable>

              <Pressable style={ButtonStyles.button}>
                <Text style={ButtonStyles.buttonText}>Lisää Kuva</Text>
              </Pressable>

        </View> 

      <NavBar navigation={navigation}></NavBar>

     </View>
   
    );
  }