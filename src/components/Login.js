import React, { Component } from 'react';
import { Text, View ,TextInput,StyleSheet,ScrollView,Button,Image} from 'react-native';
import * as firebase from "firebase";
import {slide} from "../images/slide.png"
 class Login extends Component {
   state = {
     email:'',
     pass:'',

   }
   
   render() {
   
      return (
    
        <View style={styles.mainView}>
        <Image
          style={styles.logo}
          source={require('../images/slide1.png') }
        />
        <View style={styles.container}>
        <Text>Enter Your Email</Text>
        <TextInput 
        style={{borderColor: 'gray', borderWidth: 1,borderRadius:5,marginTop:5,marginBottom:20,paddingLeft:10}}
        placeholder='Email' 
        keyboardType={'email-address'}
        underlineColorAndroid="transparent"
        value={this.state.email}
        onChangeText={(text)=>{
            this.setState({
                email:text
            })
        }}/>
          <Text>Enter Your Password</Text>
        <TextInput 
        style={{borderColor: 'gray', borderWidth: 1,borderRadius:5,marginTop:5,marginBottom:20,paddingLeft:10}}
        placeholder='Password' 
        underlineColorAndroid="transparent"
        password={true}
        value={this.state.email}
        onChangeText={(text)=>{
            this.setState({
                email:text
            })
        }}/>
        
        <Button 
        style={{width:200}}
                onPress={()=>{
                    try {
                         firebase.auth()
                            .createUserWithEmailAndPassword("aviralgarg@gmail.com", "pikachu1995");
                    
                        alert("Account created");
                    
                        // Navigate to the Home page, the user is auto logged in
                    
                    } catch (error) {
                        alert(error.toString())
                    }}}
                title="Login"
            /> 
             <Text
             style={{marginTop:10}}
             onPress={() => console.log('Text pressed')}
             >Not an Account?Click here</Text>
             </View>
            </View>
      
      );
   }
}
export default Login

const styles = StyleSheet.create({

container:{
    marginTop:60,
    width:150,

},
    logo:{
        padding:20,
        marginTop:140,
        width:100,
        height:100,
 
    },
    mainView:{
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
backgroundColor:'#424242',
width:'100%',

    }
})