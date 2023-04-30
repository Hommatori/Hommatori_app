import { React } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserDetails({ user }) {

    //console.log(user)

    const date = new Date(user.creation_time);
    const formattedDate = date.toLocaleString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Europe/Helsinki'
    }).replace(',', '');
    //console.log(formattedDate); // Outputs: "04/29/2023 12:02:11"

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
            <View >
                <Text style={styles.text2}>Käyttäjätili luotu:</Text>
                <Text style={styles.text}>{formattedDate}</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    row: {
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