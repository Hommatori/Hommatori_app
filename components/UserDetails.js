
import { React } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Tämä funktio piirtää asiakastiedot näytölle
export default function UserDetails({ user }) {

    const date = new Date(user.creation_time);
    const formattedDate = date.toLocaleString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'Europe/Helsinki'
    }).replace(/(\d+)\/(\d+)\/(\d+)/, '$1.$2.$3');

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
            <View style={styles.row}>
                <Text style={styles.text2}>Käyttäjätili luotu:</Text>
                <Text style={styles.text}>{formattedDate}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

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