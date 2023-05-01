
import { Text, View, StyleSheet } from 'react-native';

//luo jokeiselle sivuille yläpalkin jossa lukee Hommatori
export default function Header({ navigation }) {

  return (

    <View style={HeaderStyles.header}>
      <Text style={HeaderStyles.headerText}>Hommatori</Text>
    </View>

  );
}

const HeaderStyles = StyleSheet.create({
        
  header: {
    alignItems: 'center',
    height: 70,
    backgroundColor: '#25db55',
    padding: 15,
    borderRadius: 5,
    elevation: 10,
  },
  headerText: {
    marginTop: 25,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});