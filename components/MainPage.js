import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Styles from '../Styles';

export default function MainPage() {
  return (

    <View style={Styles.container}>
        <Text>Tervetuloa hommatorille</Text>
            <View style={Styles.searchBar}>
                <TextInput 
                //style={Styles.searchBar}
                //onChangeText={}
                //value={}
                placeholder="Syötä hakusana"
                />       
        </View>
    </View>

  );
}
