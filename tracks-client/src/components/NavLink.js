import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native";


const NavLink = ({text, routename}) => {
      const navigation = useNavigation();

    return (
      <TouchableOpacity onPress={() => navigation.navigate(routename )}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    );
}

export default NavLink

const styles = StyleSheet.create({
  link: {
    color: "blue",
    marginLeft: 15,
    marginTop: 15,
  },
});
