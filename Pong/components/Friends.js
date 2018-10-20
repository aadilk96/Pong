import React, { Component } from "react";
import { ActivityIndicator, FlatList, Text, View, ScrollView, TouchableHighlight, AppRegistry, StyleSheet, Image, Linking, } from "react-native";
import { List, ListItem } from "react-native-elements";
import PopupDialog from 'react-native-popup-dialog';

export default class FP extends React.Component {

 state = {
   data: [],
   page: 0,
   loading: false,
   id: 4
 };

 componentWillMount() {
   this.fetchData();
 }

 fetchData = async () => {
   this.setState({ loading: true });
   const response = await fetch(
     `https://pongapi.herokuapp.com/api/getFriends/${this.state.id}`
   );
   const json = await response.json();
   var actualFriends = [];
   for (var i = 0; i < json.friends.length; i++) {
    const responseDetail = await fetch(
      `https://pongapi.herokuapp.com/api/getUserById/${json.friends[i].user2}`
    );
    const jsonDetail = await responseDetail.json();
    actualFriends.push(jsonDetail.user)
   }
   this.setState(state => ({
     data: [...state.data, ...actualFriends],
     loading: false
   }));
 };

 handleEnd = () => {
   this.setState(state => ({ page: state.page + 1 }), () => this.fetchData());
 };

 render() {
   return (
     <View>
       <List>
         <FlatList
           data={this.state.data}
           keyExtractor={(x, i) => i.toString()}
           onEndReached={() => this.handleEnd()}
           onEndReachedThreshold={0}
           ListFooterComponent={() =>
             this.state.loading
               ? null
               : <ActivityIndicator size="large" animating />}
           renderItem={({ item }) =>
             <ListItem
               roundAvatar
               title={`${item.name}`}
               onPress={() => {
               this.popupDialog.show();
             }}
             />}
         />
       </List>
       // Pop-Up for each Contact
       <PopupDialog
          width={65}
          height={325}
         ref={(popupDialog) => { this.popupDialog = popupDialog; }}
         >
         <View styles={styles.inrow}>
         // Button Hyperlinks for Contact Pop-Up
          <TouchableHighlight onPress={() => Linking.openURL('http://facebook.com/$`{title}`')}>
            <Image style={styles.button} source={require('./fb.png')} />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => Linking.openURL('http://instagram.com/$`{title}`')}>
            <Image style={styles.button} source={require('./ins.png')} />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => Linking.openURL('http://linkedin.com/$`{title}`')}>
            <Image style={styles.button} source={require('./in.png')} />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => Linking.openURL('http://snapchat.com/$`{title}`')}>
            <Image style={styles.button} source={require('./sc.png')} />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => Linking.openURL('http://twitter.com/$`{title}`')}>
            <Image style={styles.button} source={require('./tw.png')} />
          </TouchableHighlight>

        </View>
      </PopupDialog>
     </View>

   );
 }
}
const styles = StyleSheet.create({
  inrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    width: 65,
    height: 65
  },
})
