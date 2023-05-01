
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState, React, useEffect } from 'react'

//ilmoituksen luontiin sovellus radiobuttonin toimintaan
export default function RadioButton({ options, onPress, initialValue }) {

    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        if (initialValue !== undefined) {
            setValue(initialValue);
        }
    }, [initialValue]);

    const handleRadioButtonPress = (selectedValue) => {
        setValue(selectedValue)
        onPress(selectedValue)
    }

    return (
        <>
            {
                options.map((item) => (
                    <View key={item.value} styles={styles.buttonContainer}>
                        <Text style={styles.label}>{item.label}</Text>
                        <Pressable style={styles.circle} onPress={() => handleRadioButtonPress(item.value)}>
                            {value === item.value && <View style={styles.checkedCircle} />}
                        </Pressable>

                    </View>
                ))
            }
        </>
    )
}

const styles = StyleSheet.create({
    label: {
        marginRight: 10,
    },
    circle: {
        height: 28,
        width: 28,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#25db55',
    },

});