import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';
import { CheckBox, Button, FormLabel, FormInput, FormValidationMessage, SocialIcon, Icon, Avatar } from 'react-native-elements';
import PopupDialog from 'react-native-popup-dialog';
import { AsyncStorage } from 'react-native';

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
    jsonQR: {
      name: "",
      phone: "",
      facebook: "",
      instagram: "",
      snapchat: "",
      twitter: "",
      linkedin: ""
    }
  };

  async postData(url = `https://pongapi.herokuapp.com/api/newUser`, data = this.state.jsonQR) {
              // Default options are marked with *
                await fetch(url, {
                  method: "POST", // *GET, POST, PUT, DELETE, etc.
                  mode: "no-cors", // no-cors, cors, *same-origin
                  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                  headers: {
                      "Content-Type": "application/json; charset=utf-8",
                  },
                  redirect: "follow", // manual, *follow, error
                  body: JSON.stringify(data), // body data type must match "Content-Type" header
                }).then(res => res.json())
                  .then(res2 => {
                    AsyncStorage.setItem('userId', res2.id.toString())
                });
                //console.log(response)
                // .then(() => {
                //     //AsyncStorage.setItem('userId', )
                //     console.log(response);
                //   // console.log(JSON.stringify(data))
                // })
                // console.log(response)
          }

  render() {
    const {facebook, linkedin, snapchat, instagram, twitter, name, phone} = this.state;
    this.state.jsonQR.facebook = this.state.stateFacebook === true ? `${this.state.facebook}` : null;
    this.state.jsonQR.twitter = this.state.stateTwitter === true ? `${this.state.twitter}` : null;
    this.state.jsonQR.snapchat = this.state.stateSnapchat === true ? `${this.state.snapchat}` : null;
    this.state.jsonQR.instagram = this.state.stateInstagram === true ? `${this.state.instagram}` : null;
    this.state.jsonQR.linkedin = this.state.stateLinkedin === true ? `${this.state.linkedin}` : null;
    this.state.jsonQR.phone = this.state.phone;
    this.state.jsonQR.name = this.state.name;
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
          <SocialIcon type='snapchat' style={{backgroundColor: '#e5e200'}}/>
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
            this.postData()
          }}
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