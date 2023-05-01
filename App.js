
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './Pages/MainPage';
import Announce from './Pages/Announce';
import NavBar from './components/NavBar';
import Account from './Pages/Account';
import AdAccount from './Pages/AdAccount';
import ShowAd from './Pages/ShowAd';
import Login from './Pages/Login';
import LoggedIn from './Pages/LoggedIn';
import OwnAds from './Pages/OwnAds';
import OwnAd from './Pages/OwnAd';
import EditAd from './Pages/editAd';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Login'
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
            <Stack.Screen 
            name="Login" 
            component={Login}
            options={{ headerTitle: 'Login'}}
            />
            <Stack.Screen 
            name="LoggedIn" 
            component={LoggedIn}
            options={{ headerTitle: 'LoggedIn'}}
            />
            <Stack.Screen 
            name="OwnAds" 
            component={OwnAds}
            options={{ headerTitle: 'OwnAds'}}
            />
            <Stack.Screen 
            name="OwnAd" 
            component={OwnAd}
            options={{ headerTitle: 'OwnAd'}}
            />
                        <Stack.Screen 
            name="EditAd" 
            component={EditAd}
            options={{ headerTitle: 'EditAd'}}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}