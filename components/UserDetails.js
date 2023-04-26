import {React} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function LoggedIn({user}) {

    //console.log(user)

    return (
    
      <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.text2}>Nimi:</Text>
            <Text style={styles.text}>{user.fname}</Text>
            <Text style={styles.text}>{user.lname}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.text2}>Käyttäjänimi:</Text>
            <Text style={styles.text}>{user.username}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.text2}>Sähköposti:</Text>
            <Text style={styles.text}>{user.email}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.text2}>Puhelinumero:</Text>
            <Text style={styles.text}>{user.phonenumber}</Text>
        </View>
    </View>
     
      );
  }

  const styles = StyleSheet.create({
    container:{
       
    },
    header:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    row:{
        flexDirection: 'row',
        
    },

    text: {
        marginRight: 5,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    text2: {
        marginRight: 5,
        marginBottom: 10,
        fontSize: 20,
    },
  });