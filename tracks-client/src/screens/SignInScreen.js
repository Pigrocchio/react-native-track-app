import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import Navlink from "../components/NavLink";
import { useNavigation } from "@react-navigation/native";


const SignInScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

    const navigation = useNavigation();


  React.useEffect(
    () => navigation.addListener("blur", () => clearErrorMessage()),
    []
  );


return (
  <>
  
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={({ email, password }) => signin({ email, password })}
      />
      <Navlink text="Not registered ? Go to Sign up" routename="SignUp" />
    </View>
  </>
);  

 
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});
