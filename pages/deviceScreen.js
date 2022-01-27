import React,{Component} from 'react'
import {View,Text} from 'react-native'
import * as Device from 'expo-device';

export default class deviceScreen extends Component {
constructor(props){
super(props)
}
render(){
return (
<View>
<Text>{Device.brand}, {Device.modelName},{Device.modelId}, {Device.osVersion}</Text>
</View>);
}
}
