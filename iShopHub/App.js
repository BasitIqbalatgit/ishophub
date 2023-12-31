import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login';
import SignUp from './Components/signup';
import Home from "./Components/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login } options={{ headerShown: false }}/>
        <Stack.Screen name='Signup' component={SignUp } options={{ headerShown: false }}/>
        <Stack.Screen name='Home' component = {Home} options={{headerShown: false}} />
      </Stack.Navigator>



      {/* <View style={styles.container}>
      <SignUp />

      <Login />
      </View> */}

    </NavigationContainer>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
