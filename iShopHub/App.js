import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/login2';
import SignUp from './Components/signup';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUp />

      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Login /> */}
    </View>
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
