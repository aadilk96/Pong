import React, { Component } from "react";
import { ActivityIndicator, FlatList, Text, View, ScrollView, TouchableHighlight, AppRegistry, StyleSheet, Image, Linking, AsyncStorage} from "react-native";
import { List, ListItem } from "react-native-elements";
import PopupDialog from 'react-native-popup-dialog';

export default class FP extends React.Component {

 state = {
   data: [],
   page: 0,
   loading: false
 };

 componentWillMount() {
   this.fetchData();
 }

 fetchData = async () => {
   this.setState({ loading: true });
   const response = await fetch(
     `https://randomuser.me/api?results=15&seed=hi&page=${this.state.page}`
   );
   const json = await response.json();
   // var actualFriends = [];
   // for (var i = 0; i < json.friends.length; i++) {
   //  const responseDetail = await fetch(
   //    `https://pongapi.herokuapp.com/api/getUserById/${json.friends[i].user2}`
   //  );
   //  const jsonDetail = await responseDetail.json();
   //  actualFriends.push(jsonDetail.user)
   // }
   this.setState(state => ({
     // data: [...state.data, ...actualFriends],
     data: [...state.data, ...json.results],
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
           keyExtractor={(x, i) => i}
           onEndReached={() => this.handleEnd()}
           onEndReachedThreshold={0}
           ListFooterComponent={() =>
             this.state.loading
               ? null
               : <ActivityIndicator size="large" animating />}
           renderItem={({ item }) =>
             <ListItem
               roundAvatar
               avatar={{ uri: item.picture.thumbnail }}
               title={`${item.name.first} ${item.name.last}`}
               onPress={() => {
               this.popupDialog.show();
             }}
             />}
         />
       </List>
       // Pop-Up for each Contact
       <PopupDialog
          width={85}
          height={500}
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
    width: 85,
    height: 85
  },
})
