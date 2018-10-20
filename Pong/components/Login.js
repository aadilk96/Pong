import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';
import { CheckBox, Button, FormLabel, FormInput, FormValidationMessage, SocialIcon, Icon, Avatar } from 'react-native-elements';
import PopupDialog from 'react-native-popup-dialog';

import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput
} from 'react-native';


export default class Login extends Component {
  state = {
    facebook: '',
    linkedin: '',
    snapchat: '',
    instagram: '',
    twitter: '',
    stateFacebook: false,
    stateLinkedin: false,
    stateSnapchat: false,
    stateInstagram: false,
    stateTwitter: false,
    phone: '+407696969',
    statePhone: false,
    name: 'Tudor Maiereanu',
  };

  render() {
    const {facebook, linkedin, snapchat, instagram, twitter, name, phone} = this.state;
    const fb = this.state.stateFacebook === true ? `${this.state.facebook}` : null;
    const tw = this.state.stateTwitter === true ? `${this.state.twitter}` : null;
    const sc = this.state.stateSnapchat === true ? `${this.state.snapchat}` : null;
    const ig = this.state.stateInstagram === true ? `${this.state.instagram}` : null;
    const li = this.state.stateLinkedin === true ? `${this.state.linkedin}` : null;
    const jsonQR = {
      name: this.state.name,
      phone: this.state.phone,
      facebook: fb,
      instagram: ig,
      snapchat: sc,
      twitter: tw,
      linkedin: li,
    }
    return (
      <View style={styles.container}>
        <View style={styles.inrow_name}>
          <Avatar
            size="small"
            rounded
            title="TM"
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <TextInput
            style={styles.inputName}
            onChangeText={(text) => this.setState({name: text})}
            value={this.state.name}
          />
        </View>
        <View style={styles.inrow}>
          <Icon name="phone" />
          <TextInput
            style={styles.inputPhone}
            onChangeText={(text) => this.setState({phone: text})}
            value={this.state.phone}
          />
        </View>
        <View style={styles.inrow}>
          <SocialIcon type='twitter'/>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({twitter: text})}
            value={this.state.twitter}
          />
        </View>

        <View style={styles.inrow}>
          <SocialIcon type='facebook'/>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({facebook: text})}
            value={this.state.text}
          />
        </View>

        <View style={styles.inrow}>
          <SocialIcon type='snapchat'/>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({snapchat: text})}
            value={this.state.text}
          />
        </View>

        <View style={styles.inrow}>
          <SocialIcon type='instagram'/>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({instagram: text})}
            value={this.state.text}
          />
        </View>

        <View style={styles.inrow}>
          <SocialIcon type='linkedin'/>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({instagram: text})}
            value={this.state.text}
          />
        </View>
        <Button
          title="Update"
          onPress={() => {
            function postData(url = `https://pongapi.herokuapp.com/api/newUser`, data = jsonQR) {
              // Default options are marked with *
                const response =  fetch(url, {
                  method: "POST", // *GET, POST, PUT, DELETE, etc.
                  mode: "no-cors", // no-cors, cors, *same-origin
                  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                  headers: {
                      "Content-Type": "application/json; charset=utf-8",
                  },
                  redirect: "follow", // manual, *follow, error
                  body: JSON.stringify(data), // body data type must match "Content-Type" header
                }).then(newUser => AsyncStorage.setItem('userId', newUser.id))
          }}}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    },

    inrow: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },

    inrow_name: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      height: 60
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
        width: 200
    },

    inputPhone: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      borderRadius: 5,
      padding: 5,
      width: 200,
      left: 20
    },

    inputName: {
      fontSize: 20,
      height: 40,
      borderColor: 'gray',
      margin: 10,
      borderRadius: 5,
      padding: 5,
      width: 200,
    }

});