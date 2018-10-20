import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import { CheckBox, Button, FormLabel, FormInput, FormValidationMessage, SocialIcon, Icon, Avatar } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation';
import { Actions, Router, Scene } from "react-native-router-flux";
import Form from 'react-native-form';
import SM from './components/selectSocialMedia';
import FP from './components/Friends';

class HomeScreen extends React.Component {
  render() {
    return (
      <SM />
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <FP />
    );
  }
}

export default createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Friends: { screen: SettingsScreen },
});

//
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       press: false
//     };
//   }
//
//   render() {
//     const { press } = this.state;
//     if(this.state.press === false) {
//       return (
//         <View style={styles.View}>
//           <Button onPress={() => {this.setState({press: !press})
//             console.log(this.state.press)
//           }}></Button>
//           <Button onPress={() => {this.setState({press: !press})
//             console.log(this.state.press)
//           }}></Button>
//         </View>
//       );
//   } else {
//     return (
//       <SM />
//     );
//     }
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  Text: {
    fontSize: 30,
    textAlign: 'center',
    padding: 10
  },

  View: {
    top: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  View_inrow: {
    flexDirection: 'row',
    height: 80,
    padding: 5
  },

  FormInput_container2: {
    width: 200,
  },

  FormInput_container: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }

});
