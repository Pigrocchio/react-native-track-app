import React from "react";
import { StyleSheet, Text, View, AlertButton, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";


const SignInScreen = () => {
  const navigation = useNavigation();


  return (
    <View>
      <Text style={{ fontSize: 48 }}>SignInScreen</Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
