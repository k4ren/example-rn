import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component{
  render (){
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View>
        <Greeting name='Name 1'/>
        <Greeting name='Name 2'/>
        <Greeting name='Name 3'/>
      </View>
    );
  }
}
