import React, {useContext} from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from "../components/AuthForm";
import Navlink from '../components/NavLink'

const SignupScreen = () => {
  const {state, signup} = useContext(AuthContext)
  
  


  return (
    <>
      <View style={styles.container}>
        <AuthForm
          headerText='Sign Up for Tracker'
          errorMessage={state.errorMessage}
          submitButtonText='Sign Up'
          onSubmit={({email, password}) => signup({email, password}) }
        />
<Navlink text='Alredy registered ? Go to Sign in' routename='Signin'/>
          
        
      </View>
    </>
  );
};



export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },


});
