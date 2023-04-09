import { View, Text, StyleSheet, Pressable } from 'react-native'
import {useState, React} from 'react'
import RadioButtonStyles from '../Styles/RadioButtonStyles';

export default function RadioButton({options, onPress, initialValue}) {

    const [value, setValue] = useState(initialValue)

    const handleRadioButtonPress = (selectedValue) => {
        setValue(selectedValue)
        onPress(selectedValue)
    }


  return (
    <>
    {
        options.map((item) => (
            <View key={item.value} styles={RadioButtonStyles.buttonContainer}>
                <Text style={RadioButtonStyles.label}>{item.label}</Text>
                <Pressable style={RadioButtonStyles.circle} onPress={() => handleRadioButtonPress(item.value)}>
                    {value === item.value && <View style={RadioButtonStyles.checkedCircle} />}
                </Pressable>

            </View>
        ))
    }
    </>
  )
}