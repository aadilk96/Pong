import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Form from 'react-native-form';
import { Button, FormLabel, FormInput, FormValidationMessage, SocialIcon, Icon, Avatar } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facebook: 'fg',
      linkedin: '',
      snapchat: '',
      instagram: '',
      twitter: ''
    };
  }

  render() {
    return (
      <View style={styles.View}>
        <View style={{top: 10, bottom: 200}}>
          <Avatar
            xlarge
            rounded
            source={{uri: "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/4d/gk/p04dgkm4.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
        </View>
        <View style={styles.View_inrow}>
          <FormLabel>
            <SocialIcon type='facebook'/>
          </FormLabel>
          <FormInput
            containerStyle = {styles.FormInput_container2}
            inputStyle = {styles.FormInput_container}
            onChangeText={(facebook) => this.setState({facebook})}/>
        </View>
        <View style={styles.View_inrow}>
          <FormLabel>
            <SocialIcon type='twitter'/>
          </FormLabel>
          <FormInput
            containerStyle = {styles.FormInput_container2}
            inputStyle = {styles.FormInput_container}
            onChangeText={(twitter) => this.setState({twitter})}/>
        </View>
        <View style={styles.View_inrow}>
          <FormLabel>
            <SocialIcon type='instagram'/>
          </FormLabel>
          <FormInput
            containerStyle = {styles.FormInput_container2}
            inputStyle = {styles.FormInput_container}
            onChangeText={(instagram) => this.setState({instagram})}/>
        </View>
        <View style={styles.View_inrow}>
          <FormLabel>
            <SocialIcon styles = {{iconSize: 10, iconColor: 'white'}} type='linkedin'/>
          </FormLabel>
          <FormInput
            containerStyle = {styles.FormInput_container2}
            inputStyle = {styles.FormInput_container}
            onChangeText={(linkedin) => this.setState({linkedin})}/>
        </View>
        <View style={styles.View_inrow}>
          <FormLabel>
            <SocialIcon type='snapchat'/>
          </FormLabel>
          <FormInput
            containerStyle = {styles.FormInput_container2}
            inputStyle = {styles.FormInput_container}
            onChangeText={(snapchat) => this.setState({snapchat})}/>
        </View>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
