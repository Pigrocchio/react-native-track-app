import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderBackButton } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";


import SignUp from './screens/SignupScreens'
import Signin from './screens/SignInScreen'
import TrackList from './screens/TrackListScreen'
import TrackDetail from './screens/TrackDetailScreen'
import TrackCreate from './screens/TrackCreateScreen'
import Account from './screens/AccountScreen'



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();




function MyTabs() {
  
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TrackStack"
        component={TrackStack}
        
      />
      <Tab.Screen name="TrackCreate" component={TrackCreate} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}



function TrackStack() {
  return (
    <Stack.Navigator initialRouteName="TrackList">
      <Stack.Screen
        name="TrackList"
        component={TrackList}
       
      />
    </Stack.Navigator>
  );
}


function MainNavigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            header: () => false,
          }}
        />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen
          name="MainFlow"
          component={MyTabs}
          options={{
            headerLeft: () => {
              return <></>;
            },
          }}
        />
        <Stack.Screen name="TrackDetail" component={TrackDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;


