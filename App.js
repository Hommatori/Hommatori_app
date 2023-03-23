
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './components/MainPage';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='MainPage'
        screenOptions={{headerShown: true}}> 
          <Stack.Screen 
            name="MainPage" 
            options={{title: 'Hommatori'}}
            component={MainPage} 
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}