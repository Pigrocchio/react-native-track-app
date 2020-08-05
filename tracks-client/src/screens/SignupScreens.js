import React, {useState, useContext} from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from '../components/Spacer.js'
import {Context as AuthContext} from '../context/AuthContext'

const SignupScreen = () => {
  const {state, signup} = useContext(AuthContext)
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();


  return (
    <>
      <View style={styles.container}>
        <Spacer>
          <Text h3> Sign Up</Text>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            label="Email"
            value={email}
            onChangeText={(newEmail) => setEmail(newEmail)}
          />
          <Input
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            label="Password"
            value={password}
            onChangeText={(newpassword) => setPassword(newpassword)}
          />
          {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
          <Button title="Sign Up" onPress={() => signup({email,password})}/>
        </Spacer>
      </View>
    </>
  );
};



export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
   
    marginBottom: 15

  }
});
