import { React, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import { StatusBar, hidden } from 'expo-status-bar';
import ButtonStyles from '../Styles/ButtonStyles';



export default function Account({ navigation, route }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [online, setOnline] = useState(false);

  const userdata = route.params.userData


  console.log(userdata)



  return (

    <View style={styles.container}>
      <StatusBar style="light" translucent={true} />
      <Header></Header>
      <View style={styles.property}>
        <Text style={styles.headerText}>Muokkaa tiliä</Text>
        <View>
          <Text style={styles.itemText}>Etunimi</Text>
          <Text style={styles.itemText2}>{userdata.fname}</Text>
          <TextInput style={styles.textInputContainer}></TextInput>

          <Text style={styles.itemText}>Sukunimi</Text>
          <Text style={styles.itemText2}>{userdata.lname}</Text>
          <TextInput style={styles.textInputContainer}></TextInput>

          <Text style={styles.itemText}>Sähköposti</Text>
          <Text style={styles.itemText2}>{userdata.email}</Text>
          <TextInput style={styles.textInputContainer}></TextInput>

          <Text style={styles.itemText}>Käyttäjänimi</Text>
          <Text style={styles.itemText2}>{userdata.username}</Text>
          <TextInput style={styles.textInputContainer}></TextInput>

          <Text style={styles.itemText}>Puhelinumero</Text>
          <Text style={styles.itemText2}>{userdata.phonenumber}</Text>
          <TextInput style={styles.textInputContainer}></TextInput>

          {/* <Text style={styles.itemText}>Salasana</Text>
          <Text style={styles.itemText2}>Tässä tietoa</Text>
          <TextInput style={styles.textInputContainer}></TextInput> */}

          <Pressable style={ButtonStyles.button}>
            <Text style={ButtonStyles.buttonText}>Tallenna</Text>
          </Pressable>
          <Pressable style={ButtonStyles.button}
            onPress={() => { navigation.navigate('LoggedIn') }}
          >
            <Text style={ButtonStyles.buttonText}>Takaisin</Text>
          </Pressable>
        </View>
      </View>
      <NavBar navigation={navigation}></NavBar>
    </View>

  )
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  property: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInputContainer: {
    backgroundColor: '#dadee6',
    padding: 7,
    borderRadius: 10,
  }


});