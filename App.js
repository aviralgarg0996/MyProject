import React,  { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./src/components/Login.js";
import * as firebase from "firebase";
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
    return (
     
        
       <View style={styles.container}>
        <Login />
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
