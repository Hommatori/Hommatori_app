import React, { useEffect, useState, useCallback } from 'react';
import {Text, TextInput, View, ScrollView, Image, Pressable } from 'react-native';
import { StatusBar, hidden } from 'expo-status-bar';
import Styles from '../Styles/Styles';
import ButtonStyles from '../Styles/ButtonStyles';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
import DropdownStyles from '../Styles/DropdownStyles';
import regions from '../json/regions';
import Type from '../json/Type';

export default function MainPage({navigation}) {

    const [open, setOpen] = useState(false);
    const [openAnother, setOpenAnother] = useState(false);
    const [ad, setAd] = useState([]);
    const [offset, setOffset] = useState(0);
    const [offset2, setOffset2] = useState(1);
    const [offset3, setOffset3] = useState(10);
    const [total_rows, setTota_rows] = useState(0)
    const [region, setRegion] = useState('all');
    const [type, setType] = useState('all');
    const [types, setTypes] = useState([]);
    const [searchText, setSearchText] = useState("");
      // tämä hakee databasesta ilmoitukset.
      useEffect(() => {
        getData();    
      }, []); 

    const getData = async () => {
      try{
      const results = await axios.get('http://hommatoriapi.azurewebsites.net/ad/withparams/get?type='+type+'&region='+region+'&order=&offset='+offset+'&query='+searchText+'')
      setAd(Object.values(results.data.data))
      setTota_rows(results.data.total_rows)
      } catch (error){
        console.log("getData error")
      }}
 
    //tässä lisätään offsettia jotta saadaan seuraava sivu
    const nextAds = async () => {
      setOffset(offset+1)
      setOffset2(offset2+10)
      setOffset3(offset3+10)
      getData();
      
    }
    // tässä vähennetään offsettia nollaan asti jotta saadaan aiempi sivu
    const previousAds = async () => {
      if (offset > 0) {
        setOffset(offset-1)
        setOffset2(offset2-10)
        setOffset3(offset3-10)
      }
      getData();
    }

    //tämää aukoo ja sulkee vain toisen pudotuslistan kerrallaan.
    const onOpen = useCallback(() => {
      setOpenAnother(false);
    }, []);
    const onAnotherOpen = useCallback(() => {
      setOpen(false);
    }, []);

  return (

    
    <View style={Styles.container}>
      <StatusBar style="light" translucent={true}/>
           <Header></Header>
      <View style={Styles.container2}>

   
        <View style={Styles.searchBoxContainer1}>
          <View style={Styles.searchBoxContainer2}>    
            <View style={Styles.searchBoxContainer3}>
              <TextInput 
              style={Styles.textInputContainer1}
              placeholder="Syötä hakusana"
              onChangeText={(text => setSearchText(text))}
              returnKeyType='search'
             // onSubmitEditing={() => executeSearch(search) }
              />       
              <Pressable style={ButtonStyles.buttonSearch}
              onPress={() => getData()}
              >
              <Text style={ButtonStyles.buttonText}>Hae</Text>
            </Pressable>
            </View>
            <View style={Styles.searchButtonContainer}>
              <View style={DropdownStyles.dropDawnList}>
                
              <DropDownPicker
                  style={DropdownStyles.dropDawn}        
                  placeholder="Maakunta"
                  listMode="MODAL"
                  searchable={true}
                  dropDownDirection="AUTO"
                  dropDownContainerStyle={{
                    backgroundColor: "#dfdfdf",
                    borderColor: '#25db55',
                    borderRadius: 12,
                  }}
                  open={open}
                  onOpen={onOpen}
                  setOpen={setOpen}
                  items={Object.keys(regions).map((item,index) => ({
                    value: item,
                    label: item, 
                  }))}
                  value={region}
                  setValue={setRegion}
                />
              </View>
              <View style={DropdownStyles.dropDawnList}>
                <DropDownPicker
                  style={DropdownStyles.dropDawn}        
                  placeholder="Tyyppi"
                  listMode="SCROLLVIEW"
                  dropDownDirection="DOWN"
                  dropDownContainerStyle={{
                    backgroundColor: "white",
                    borderColor: '#25db55',
                    borderRadius: 12,
                  }}
                  open={openAnother}
                  onOpen={onAnotherOpen}
                  setOpen={setOpenAnother}
                  items={Type.map((item,index) => ({
                    value: item,
                    label: item
                  }))} 
                  value={type}
                  setValue={setType}
                  setItems={setTypes}
                /> 
                </View>
            </View>
          </View>
        </View>
        
         <ScrollView >
          {
            Object.values(ad).map((item, index) =>(
                <View style={Styles.adContainer} key={index}>
                  <Image 
                  style ={Styles.image}
                  source={ item.image && item.image != '' ? { uri: item.image } : null }        
                  /> 
                <View style={Styles.descriptionContainer1}>
                  <View style={Styles.descriptionContainer2}>
                    <View style={Styles.descriptionContainer3}>   
                      <Text style={Styles.textStyle}>{item.header} </Text>
                      <Text style={Styles.textStyle}>Hinta {item.price}€</Text>
                      <Text style={Styles.textStyle}>{item.region}</Text> 
                     
                    </View>
                  </View>
                    <View style={Styles.descriptionContainer3}>
                      <Text>{item.description}</Text>
                  </View>
                </View>  
              </View>
            ))
            
          }
        </ScrollView>
          <View style={ButtonStyles.nextContainer}>
            <Pressable style={ButtonStyles.buttonSearch}
                onPress={() => previousAds()}
                >
              <Text style={ButtonStyles.buttonText}>Takaisin</Text>
            </Pressable>
              <View style={ButtonStyles.infoContainer}>
               <Text style={ButtonStyles.infoText}>Sivu{offset+1}    {offset2}-{offset3}/{total_rows}</Text>
              </View>
            <Pressable style={ButtonStyles.buttonSearch}
              onPress={() => nextAds()}
              >
              <Text style={ButtonStyles.buttonText}>Seuraava</Text>
            </Pressable>
          </View>  
      </View>     
        <NavBar navigation={navigation}></NavBar>
    </View>

  );
}
