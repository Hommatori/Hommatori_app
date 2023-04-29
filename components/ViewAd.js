import { React } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ViewAd({ ad, publisher }) {

    //console.log(ad)
    console.log(publisher)

    return (


        <View style={styles.adContainer}>
            <View style={{ alignItems: 'center' }}>
                <Image
                    style={styles.image}
                    source={ad.image && ad.image != '' ? { uri: ad.image } : null}
                />
            </View>
            <View style={styles.descriptionContainer}>
                <View style={styles.textContainer}>
                    <Text>{ad.header}</Text>
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.row}>
                        <Text>Käyttäjänimi: </Text>
                        <Text>{publisher.username}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Puhelinnumero: </Text>
                        <Text>{publisher.phonenumber}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Sähköposti: </Text>
                        <Text>{publisher.email}</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.row}>
                        <Text>Alue: </Text>
                        <Text>{ad.region}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Paikkakunta: </Text>
                        <Text>{ad.municipality} </Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text>{ad.type}€</Text>
                    <Text>Hinta: {ad.price}€</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text>{ad.description}</Text>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    textContainer: {
        margin: 5,
    },
    image: {
        height: 150,
        width: 150,
        backgroundColor: '#25db55',
        borderRadius: 15,
        marginTop: 5,
    },
    adContainer: {
        flex: 1,
        flexDirection: 'column',
        borderColor: '#25db55',
        borderWidth: 3,
        borderRadius: 15,
        marginBottom: 3,
        zIndex: 10,
    },
    descriptionContainer: {
        flex: 1,
        margin: 5,
        flexDirection: 'column',
        borderColor: '#25db55',
        borderWidth: 3,
        borderRadius: 15,
        marginBottom: 3,
        zIndex: 10,
    },
});