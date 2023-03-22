import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Styles from '../Styles';

export default function MainPage() {
  return (

    <SafeAreaView>

        <View style={Styles.searchBar}>
            <Text>Hommatori</Text>
            <TextInput 
            //style={Styles.searchBar}
            //onChangeText={}
            //value={}
            placeholder="Syötä hakusana"
            />
            
        </View>
    </SafeAreaView>

  );
}
