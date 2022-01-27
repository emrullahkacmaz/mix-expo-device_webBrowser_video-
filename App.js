import React,{Component} from 'react'
import {View,Text} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import loginScreen from './pages/login';
import deviceScreen from './pages/deviceScreen';
import videoScreen from './pages/videoScreen';
import googleScreen from './pages/googleScreen';

export default class MyComponent extends Component {
constructor(props){
super(props)
}
render(){
  var Stack = createNativeStackNavigator();

return (

  <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="loginScreen" component={loginScreen} />
          <Stack.Screen name="deviceScreen" component={deviceScreen} />
          <Stack.Screen name="videoScreen" component={videoScreen} />

          <Stack.Screen name="googleScreen" component={googleScreen} />


        </Stack.Navigator>
      </NavigationContainer>
);
}
}
