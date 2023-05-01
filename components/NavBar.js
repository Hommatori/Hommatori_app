
import { StyleSheet, Text, View, Pressable, } from 'react-native';

//luo jokaiselle sivulle alalaitaan navigointipalkin
export default function NavBar({ navigation, userId }) {

  return (

    <View style={NavBarStyles.buttonContainer}>
      <Pressable style={NavBarStyles.button}
        onPress={() => navigation.navigate('MainPage')}
      >
        <Text style={NavBarStyles.buttonText}>Haku</Text>
      </Pressable>
      <Pressable style={NavBarStyles.button}
        onPress={() => navigation.navigate('Announce')}
      >
        <Text style={NavBarStyles.buttonText}>Ilmoita</Text>
      </Pressable>
      <Pressable style={NavBarStyles.button}
        onPress={() => navigation.navigate('LoggedIn')}
      >
        <Text style={NavBarStyles.buttonText}>Tili</Text>
      </Pressable>
    </View>
  );
}

const NavBarStyles = StyleSheet.create({

  buttonContainer: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  button: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 12,
    borderRadius: 5,
    elevation: 10,
    backgroundColor: '#25db55',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});