import React,{Component} from 'react'
import {View,Text, TouchableOpacity, Button} from 'react-native'

export default class loginScreen extends Component {
constructor(props){
super(props)
}

handler1 = () => {
  this.props.navigation.navigate("deviceScreen")
}
handler2 = () => {
  this.props.navigation.navigate("videoScreen")
}
handler3 = () => {
  this.props.navigation.navigate("googleScreen")
}
render(){
return (
<View>
<Button title="device bilgisi"
onPress={this.handler1}></Button>
<Button title="video player"
onPress={this.handler2}></Button>
<Button title="google"
onPress={this.handler3}></Button>

</View>);
}
}
