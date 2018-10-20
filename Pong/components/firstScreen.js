import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
const util = require('util');

export default class firstScreen extends React.Component {
 static navigationOptions = {
   title: 'first screen',
 };

 constructor(props) {
   super(props);
   this.state = {
     textFB: 'Facebook', textInsta: 'Instagram', textSnap: 'Snapchat', textLinkd: 'LinkedIn', textTwit: 'Twitter',
     textF: '', textI: '', textS: '', textL: '', textT: ''
 };
 }
 _onPressButton() {
   Alert.alert('Proceeding')
 }

 render() {
   return (
     <View style={styles.View}>
       <View style={styles.div}>

         <Text style={{fontSize: 30, textAlign: 'center', bottom: 30}}> Enter your social media information </Text>

         <TextInput
           style={styles.TextInput}
           onChangeText={(text) => this.setState({text})}
           value={this.state.textF}
           placeholder = {this.state.textFB}
         />

         <TextInput
           style={styles.TextInput}
           onChangeText={(text) => this.setState({text})}
           value={this.state.textI}
           placeholder = {this.state.textInsta}
         />

         <TextInput
           style={styles.TextInput}
           onChangeText={(text) => this.setState({text})}
           value={this.state.textS}
           placeholder = {this.state.textSnap}
         />

         <TextInput
           style={styles.TextInput}
           onChangeText={(text) => this.setState({text})}
           value={this.state.textT}
           placeholder = {this.state.textTwit}
         />

         <TextInput
           style={styles.TextInput}
           onChangeText={(text) => this.setState({text})}
           value={this.state.textL}
           placeholder = {this.state.textLinkd}
         />

         <Button
           style={styles.Button}
           onPress={this._onPressButton}
           title="Proceed"
           color="#B71C1C"
           accessibilityLabel="Learn more about this purple button"
         />

       </View>
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
 },

 View: {
   top: 100,
   padding: 35,
 },

 divone: {
   flexDirection: 'row',
 },

 Text: {
   fontSize: 500,
   textAlign: 'center',
 },

 Button: {
   top: 5000,
   padding: 4000
 },

 TextInput: {
   height: 40,
   width: 300,
   borderColor: 'gray',
   borderBottomWidth: 1,
   textAlign: 'center'

 }
});
