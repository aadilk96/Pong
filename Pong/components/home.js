import React from 'react';
import {Text, View, Button} from 'react-native';
const util = require('util');

export default class home extends React.Component{
  static navigationOptions = {
    title: 'home',
  };
  render(){
    console.log("this.props.navigation = " + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;
    return(
      <View>
        <Text>This is the homepage </Text>
        <Button
          onPress = {
            () => navigate("Second", {})
          }
          title = "Go to screen 2"
        />
      </View>
    );
  }
}
