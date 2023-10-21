import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground ,TouchableOpacity} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
const Register = () => {
  

  const [isPressed,setIsPressed] = useState(false);
  
    const [name,setname]=useState('');
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [pw,setpw]=useState("");
    const [data,setdata]=useState('');
    const [showdata,setshowdata]=useState(false);

    const handleButtonPress=()=>{
        setshowdata(true);
        setdata([...data,{name,email,password,pw}]);
        setname("");
        setemail("");
        setpassword("");
        setpw("");
    }
   
  return (
    <ImageBackground
      style={styles.background}
      source={require('../images/2.png')}
      resizeMode='stretch'
    >
      <View style={styles.container}>
        <Text style={styles.loginText}>Sign up</Text>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Icon name="ios-person" size={20} color="gray" style={styles.icon} />
          </View>
          <TextInput style={styles.input} placeholder="Name"  />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Icon name="ios-mail" size={20} color="gray" style={styles.icon} />
          </View>
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Icon name="ios-lock-closed" size={20} color="gray" style={styles.icon} />
          </View>
          <TextInput style={styles.input} placeholder="Password" />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Icon name="ios-lock-closed" size={20} color="gray" style={styles.icon} />
          </View>
          <TextInput style={styles.input} placeholder="Confrim password" />
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPressIn={()=>setIsPressed(true)}
          onPressOut={()=>setIsPressed(false)}>
        {/* <View style={styles.buttonContent}> */}
        <Text style={[styles.buttonText, isPressed ? {color:"black"}: ""]}>Sign Up</Text>
          <Icon name="ios-arrow-forward" size={20} color="white" style={styles.buttonIcon} />
        {/* </View> */}
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
    marginBottom: 60,
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
    borderWidth: 1, 
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // buttonContent: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonIcon: {
    marginLeft: 10,
  },
});

export default Register;