import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import {Text, Button, Input} from 'react-native-elements'
import Spacer from '../components/Spacer';


const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


    return (
      <>
        <View>
          <Spacer>
            <Text h3>{headerText}</Text>
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
            {errorMessage ? (
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}
            <Button
              title={submitButtonText}
              onPress={() => onSubmit({ email, password })}
            />
          </Spacer>
        </View>
      </>
    );
}

export default AuthForm

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginBottom: 15,
  },
});
