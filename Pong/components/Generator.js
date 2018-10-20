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


export default class Generator extends Component {
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
    phone: '+407696969'
  };

  render() {
    const {facebook, linkedin, snapchat, instagram, twitter} = this.state;
    const fb = this.state.stateFacebook === true ? `${this.state.facebook}` : null;
    const tw = this.state.stateTwitter === true ? `${this.state.twitter}` : null;
    const sc = this.state.stateSnapchat === true ? `${this.state.snapchat}` : null;
    const ig = this.state.stateInstagram === true ? `${this.state.instagram}` : null;
    const li = this.state.stateLinkedin === true ? `${this.state.linkedin}` : null;
    const jsonQR = {
      facebook: fb,
      instagram: ig,
      snapchat: sc,
      twitter: tw,
      linkedin: li,
    }
    return (
      <View style={styles.container}>
        <View style={styles.inrow}>
          <SocialIcon type='twitter'/>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({twitter: text})}
            value={this.state.twitter}
          />
          <CheckBox
            containerStyle = {{backgroundColor: '#ffffff', borderWidth: 0,  justifyContent: 'center'}}
            checked={this.state.stateTwitter}
            onPress={() => this.setState({stateTwitter: !this.state.stateTwitter})}
          />
        </View>

        <View style={styles.inrow}>
          <SocialIcon type='facebook'/>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({facebook: text})}
            value={this.state.text}
          />
          <CheckBox
            containerStyle = {{backgroundColor: '#ffffff', borderWidth: 0,  justifyContent: 'center'}}
            checked={this.state.stateFacebook}
            onPress={() => this.setState({stateFacebook: !this.state.stateFacebook})}
          />
        </View>

        <View style={styles.inrow}>
          <SocialIcon type='snapchat'/>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({snapchat: text})}
            value={this.state.text}
          />
          <CheckBox
            containerStyle = {{backgroundColor: '#ffffff', borderWidth: 0,  justifyContent: 'center'}}
            checked={this.state.stateSnapchat}
            onPress={() => this.setState({stateSnapchat: !this.state.stateSnapchat})}
          />
        </View>

        <View style={styles.inrow}>
          <SocialIcon type='instagram'/>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({instagram: text})}
            value={this.state.text}
          />
          <CheckBox
            containerStyle = {{backgroundColor: '#ffffff', borderWidth: 0,  justifyContent: 'center'}}
            checked={this.state.stateInstagram}
            onPress={() => this.setState({stateInstagram: !this.state.stateInstagram})}
          />
        </View>

        <View style={styles.inrow}>
          <SocialIcon type='linkedin'/>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({instagram: text})}
            value={this.state.text}
          />
          <CheckBox
            containerStyle = {{backgroundColor: '#ffffff', borderWidth: 0,  justifyContent: 'center'}}
            checked={this.state.stateLinkedin}
            onPress={() => this.setState({stateLinkedin: !this.state.stateLinkedin})}
          />
        </View>

        <Button
          title="Pong me"
          onPress={() => {
          this.popupDialog.show();
        }}
        />

        <PopupDialog
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
          >
          <View styles={{alignItems: 'center'}}>
          <QRCode
            value={JSON.stringify(jsonQR)}
            size={200}
            bgColor='purple'
            fgColor='white'/>
          </View>
        </PopupDialog>

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

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
        width: 200
    }
});