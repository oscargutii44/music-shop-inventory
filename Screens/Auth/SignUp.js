import { View, Text, Button, TextInput, Alert } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../../db/firebaseConfig";
import { initializeApp } from "firebase/app";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StylesAuth } from "./styles";
import app from "../../db/firebaseConfig";

const auth = getAuth(app);

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const SignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Account Created Succesfully!");
        Alert.alert("Account Created Succesfully!");
        const user = userCredential.user;
        console.log(user);
        //navigation.navigate('Home');
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Invalid Login");
      });
  };

  return (
    <View style={StylesAuth.container}>
      <Text>Sign Up</Text>
      
      <TextInput
      autoCapitalize="none" 
      value={email} 
      onChangeText={(email) => {setEmail(email)}}  
      placeholder='email' style={StylesAuth.TextBox}>
      </TextInput>

      <TextInput
      autoCapitalize="none"
      value={password} 
      //secureTextEntry={true} 
      onChangeText={(password) => {setPassword(password)}}  
      placeholder='password' style={StylesAuth.TextBox}>
      </TextInput>
  
      <Button title='Create Account' onPress={SignUp}/>
      
    </View>
  );
}
