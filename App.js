
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import MainPage from './Pages/MainPage';
import Announce from './Pages/Announce';
import NavBar from './components/NavBar';
import Messages from './Pages/Messages';
import Account from './Pages/Account';
import AdAccount from './Pages/AdAccount';
import ShowAd from './Pages/ShowAd';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='MainPage'
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#25db55',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          > 
          <Stack.Screen 
            name="MainPage" 
            component={MainPage} 
            options={{ headerTitle: 'Hommatori'}}
            />
          <Stack.Screen 
            name="Announce" 
            component={Announce}
            options={{ headerTitle: 'Hommatori'}}
            />
            <Stack.Screen 
            name="NavBar" 
            component={NavBar}
            options={{ headerTitle: 'Hommatori'}}
            />
            <Stack.Screen 
            name="Messages" 
            component={Messages}
            options={{ headerTitle: 'Messages'}}
            />
            <Stack.Screen 
            name="Account" 
            component={Account}
            options={{ headerTitle: 'Account'}}
            />
            <Stack.Screen 
            name="AdAccount" 
            component={AdAccount}
            options={{ headerTitle: 'AdAccount'}}
            />
            <Stack.Screen 
            name="ShowAd" 
            component={ShowAd}
            options={{ headerTitle: 'ShowAd'}}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}