import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Form from 'react-native-form';
import { CheckBox, Button, FormLabel, FormInput, FormValidationMessage, SocialIcon, Icon, Avatar } from 'react-native-elements';
import SM from './components/selectSocialMedia';
import { createBottomTabNavigator } from 'react-navigation';
import CameraScreen from './components/Camera';
import Generator from './components/Generator';
import FP from './components/Friends';

class HomeScreen extends React.Component {
  render() {
    return (
      <CameraScreen />
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

class GenerateScreen extends React.Component {
  render() {
    return (
      <Generator />
    );
  }
}

export default createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
  Generate: {screen: GenerateScreen},
});

