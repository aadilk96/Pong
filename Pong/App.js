import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Form from 'react-native-form';
import { CheckBox, Button, FormLabel, FormInput, FormValidationMessage, SocialIcon, Icon, Avatar } from 'react-native-elements';
import SM from './components/selectSocialMedia';
import { createBottomTabNavigator } from 'react-navigation';
import Camera from './components/Camera';
import Generator from './components/Generator';
import FP from './components/Friends';
import Login from './components/Login';

class CameraScreen extends React.Component {
  render() {
    return (
      <Camera />
    );
  }
}

class FriendsScreen extends React.Component {
  render() {
    return (
      <FP />
    );
  }
}

class GenerateScreen extends React.Component {
  render() {
    return (
      <Generator />
    );
  }
}

class loginScreen extends React.Component {
  render() {
    return (
      <Login />
    );
  }
}

export default createBottomTabNavigator({
  Login: { screen: loginScreen },
  Camera: { screen: CameraScreen },
  Friends: { screen: FriendsScreen },
  Generate: {screen: GenerateScreen},
});

