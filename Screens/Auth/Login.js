import { View, Text, Button, TextInput, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StylesAuth } from './styles';
import app from "../../db/firebaseConfig";

const auth = getAuth(app);

let logg = 'false'
console.log('initial logg value from Login: ',logg);



export function isLogged(){
  return logg;
}

console.log(isLogged());

export function HandleLogin() {
  const navigation = useNavigation();
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [logged, setLogged] = useState('false');
    // console.log('state in Login file: ', logged)
    
  
    // función con async await
    const Login = async () => {
      if (email !== "" && password !== "") {
        try {
          //const auth = getAuth();
          await signInWithEmailAndPassword(auth, email, password);
          //Alert.alert("Session Started");
          logg = 'true';
          console.log('after click logg value: ',logg);
          //navigation.navigate("HomeScreen");
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          Alert.alert("Invalid Login");
        }
      } else {
        Alert.alert("Emtpy Fields");
      }
    }
    return (
      <View style={StylesAuth.container}>
        <Text>Login</Text>


        <TextInput 
        value={email} 
        autoCapitalize="none"
        onChangeText={(email) => {setEmail(email)}}  
        placeholder='email' style={StylesAuth.TextBox}> 
        </TextInput>

        <TextInput 
        value={password} 
        //secureTextEntry
        autoCapitalize="none"
        onChangeText={(password) => {setPassword(password)}}  
        placeholder='password' 
        style={StylesAuth.TextBox}>
        </TextInput>
    
        <Button title='Login' onPress={Login}/>
  
        <Text>Don't have an account?</Text> 
        <Button title='Sign Up' onPress={() => navigation.navigate("SignUp")}/>
      </View>
    );
  };


  //navigation.navigate('SignUp');
  //onPress={() => navigation.navigate("SignUp")}
  //() => Alert.alert("to sign up")