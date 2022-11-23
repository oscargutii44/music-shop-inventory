import { View, Text, Button, TextInput, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { firebaseConfig  } from './firebase_config';
import { initializeApp } from 'firebase/app';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StylesAuth } from './styles';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function isLoggedSignUp(){
  const [loggedSignUp, setLoggedSignUp] = useState(false);
  //const loggedSignUp = true; 

    return (
      loggedSignUp
    );
}

// console.log('from signup file')
// console.log(loggedSignUp);

export function SignUp() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
  
  
    const SignUp = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Account Created Succesfully!')
        Alert.alert('Account Created Succesfully!');
        const user = userCredential.user;
        console.log(user);
        //navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Invalid Login');
      })
    };

  
    return (
      <View style={StylesAuth.container}>
      <Text>Sign Up</Text>
  
      <TextInput 
      value={email} 
      autoCapitalize="none"
      onChangeText={(email) => {setEmail(email)}}  
      placeholder='email' style={StylesAuth.TextBox}>
      </TextInput>

      <TextInput 
      value={password} 
      autoCapitalize="none"
      //secureTextEntry={true} 
      onChangeText={(password) => {setPassword(password)}}  
      placeholder='password' style={StylesAuth.TextBox}>
      </TextInput>
  
      <Button title='Create Account' onPress={SignUp}/>
      
    </View>
    );
  }