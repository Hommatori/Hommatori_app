
import { React } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// tämä funktio piirtää sekä oman ilmoituksen että haun kautta aukaistun ilmoituksen näytölle
export default function ViewAd({ ad, publisher }) {

    const date = new Date(ad.date);
    const formattedDate = date.toLocaleString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'Europe/Helsinki'
    }).replace(/(\d+)\/(\d+)\/(\d+)/, '$1.$2.$3');

    let type;                                       //tässä tehdään käännös
    if (ad.type === 'joboffer') {
        type = 'Tarjotaan työsuorite';
    } else if (ad.type === 'jobseeker') {
        type = 'Haetaan työntekijää';
    } else {
        type = 'kaikki ilmoitustyypit';
    }

    let region;                                     //tässä on myös käännnös
    if (ad.region === 'all') {
        region = 'Kokosuomi'
    } else {
        region = ad.region
    }

    return (

        <View style={styles.adContainer}>
            <View style={{ alignItems: 'center' }}>
                <Image                                                                //tässä piirrettäisiin kuva mutta se jäi tekemättä
                    style={styles.image}
                />
            </View>
            <View style={styles.descriptionContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.header}>{ad.header}</Text>
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.row}>
                        <Text style={styles.text2}>Ilmoituksen tyyppi: </Text>
                        <Text style={styles.text}>{type}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text2}>ilmoitus luotu: </Text>
                        <Text style={styles.text}>{formattedDate}</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.row}>
                        <Text style={styles.text2}>Käyttäjänimi: </Text>
                        <Text style={styles.text}>{publisher.username}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text2}>Puhelinnumero: </Text>
                        <Text style={styles.text}>{publisher.phonenumber}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text2}>Sähköposti: </Text>
                        <Text style={styles.text}>{publisher.email}</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.row}>
                        <Text style={styles.text2}>Alue: </Text>
                        <Text style={styles.text}>{region}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text2}>Paikkakunta: </Text>
                        <Text style={styles.text}>{ad.municipality} </Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.row}>
                        <Text style={styles.text2}>Hinta:</Text>
                        <Text style={styles.text}>{ad.price}€</Text>
                    </View>
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
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    text2: {
        fontSize: 15,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});