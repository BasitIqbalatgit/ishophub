import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../images/2.png')}
      resizeMode='stretch'
    >
      <View style={styles.container}>
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Icon name="envelope" size={20} color="gray" style={styles.icon} />
          </View>
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Icon name="lock" size={20} color="gray" style={styles.icon} />
          </View>
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Login</Text>
          <Icon name="arrow-right" size={20} color="white" style={styles.buttonIcon} />
        </View>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 54,
    fontWeight: 'bold',
    color: 'deepskyblue',
    marginBottom: 90,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
    width: 350,
    height: 40,
    borderColor: 'deepskyblue',
    borderWidth: 1, // Add this line
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    backgroundColor: 'deepskyblue',
    borderRadius: 20,
    marginTop: 8,
    marginStart: 200,
    width: 150,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonIcon: {
    marginLeft: 10,
  },
});

export default Login;