import React,  { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from "firebase";
export default class SignUp extends Component {
  render() {
    return (
     
        
       <View style={styles.container}>
       <Text>signup</Text>
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
