import React,  { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./src/components/Login.js";
import SignUp from "./src/components/SignUp.js"
import * as firebase from "firebase";
import { Navigation } from 'react-native-navigation';
export default class App extends Component {
  render() {
    var config = {
      apiKey: "AIzaSyARq0ZZw3vv6OovoNBw7cfxg6MvHkl4Gfc",
      authDomain: "testproject-4796c.firebaseapp.com",
      databaseURL: "https://testproject-4796c.firebaseio.com",
      projectId: "testproject-4796c",
      storageBucket: "",
      messagingSenderId: "168797910433"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }
  Navigation.registerComponent('Login', () => Login);

    return (
     
      // Navigation.startSingleScreenApp({
      //   screen: {
      //     screen: 'Login', // unique ID registered with Navigation.registerScreen
      //     title: 'Welcome', // title of the screen as appears in the nav bar (optional)
      //     // navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
      //     // navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
      //   },})
       <View style={styles.container}>
        <SignUp />
       <Text></Text>
       </View> 
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
