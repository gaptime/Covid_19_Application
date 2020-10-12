import React from 'react';
import { StyleSheet, 
         Text,
         View,
         TextInput,
         TouchableOpacity,Button,
         Label, TouchableWithoutFeedback
      } from 'react-native';

      const SignUp = props => {
        console.log(props)
        return (

 <View style={styles.container}>
    <View style={styles.welcome1}>
    
    
    <Text style={styles.welcome}>SIGN UP</Text>
    
          <View style={styles.inputBox}>
    <View style={styles.lblTxt}>
    <Text>First Name</Text>
    </View>
    <TextInput style={styles.input}></TextInput>
   <View style={styles.lblTxt}>
    <Text>Last Name</Text>
    </View>
    <TextInput
    style={styles.input}
    
    ></TextInput>
    <View style={styles.lblTxt}>
    <Text>Date of Birth</Text>
    </View>
    <TextInput
    style={styles.input}
    
    ></TextInput>
    <View style={styles.lblTxt}>
    <Text>Email</Text>
    </View>
    <TextInput
    style={styles.input}
    
    ></TextInput>
    <View style={styles.lblTxt}>
    <Text>Password</Text>
    </View>
    <TextInput
    style={styles.input}
    
    ></TextInput>
    <View style={styles.lblTxt}>
    <Text>Country</Text>
    </View>
    <TextInput
    style={styles.input}
    
    ></TextInput>
    </View>
    <View style={styles.space}>
      <Text style={styles.btnTxt} onPress={()=> {props.navigation.navigate({routeName: 'Loginscreen'})}}>Return to Login Page</Text>
      <Text style={styles.btnTxt} onPress={()=> {props.navigation.navigate({routeName: 'Prevent'})}}>Submit</Text>
   </View>
   </View>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingLeft: 30,
  justifyContent: 'center',
 
  backgroundColor: '#B8B8B8',
  
},
space:{
  flexDirection: 'row',
  padding: 30,
  justifyContent: 'space-between'
},
inputBox:{
  paddingLeft: 20
}
,
container1: {
  flex: 1,
  
  backgroundColor: 'black',
  
},
welcome:{
  
  fontSize: 30,
  textAlign: 'center',
 
 height: 70,
 
  color: "black",
  backgroundColor: '#B8B8B8',
  paddingTop: 15,
  
  
},
welcome1:{
  
  width: "100%",
  textAlign: 'center',
  top: 0,
  left: 0,
  position: "absolute",
  fontFamily: "arial",
  color: "#fff",
  //paddingLeft: 20
  
},
input: {

width: "50%",
backgroundColor: "#fff",
padding: 10,
marginBottom: 30,


},
userBtn: {
  backgroundColor: '#663D14',
  padding: 15,
  width: "45%",
  
},
lblTxt:{
  fontSize: 18,
  textAlign: 'center',
  //color: 'white',
  color: 'black',
  textAlign: 'left',
}
,
btnTxt: {
  fontSize: 18,
  textAlign: 'center',
 // color: 'white'
 color: 'black'
},
btnContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: "90%",
  
}
});
export default SignUp;