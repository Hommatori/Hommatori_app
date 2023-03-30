
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import MainPage from './components/MainPage';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='MainPage'
          screenOptions={{
            headerShown: true,
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}