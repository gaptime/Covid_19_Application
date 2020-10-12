import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, 
         Text,
         View,
         TextInput, Button,
         TouchableOpacity,
         Label, TouchableWithoutFeedback
      } from 'react-native';

      const PasswordRecovery = props => {
  return (
    

   <View>
        <View style={styles.header1}>
        <Text style={styles.header}>PASSWORD RECOVERY</Text>
        </View>
  
        <View style={{width: '100%', height: 100, backgroundColor: 'black'}}>
          
          </View> 
        <View style={{width: '100%', height: 350, backgroundColor: '#663D14', }}>
          <View style={{width: '100%', height: 75, backgroundColor: '#663D14', padding: 5}} >
        <Text style={{color: "#fff", fontSize: 16}} >Enter your email address down below and click Submit. You will recieve an email with a link which will enable you to change your password.</Text>
        </View>

        <Text style={{color: "#fff", fontSize: 16, paddingTop: 50}} >Email</Text>
        <TextInput style={styles.input}></TextInput>
        <TouchableOpacity> 
        <Text style={styles.btnTxt} onPress={()=> {
  props.navigation.navigate({routeName: 'Signup'})
}}>Submit</Text>
      </TouchableOpacity>
          </View> 
        <View style={{width: '100%', height: 350, backgroundColor: 'black'}} >
        <Text style={styles.btnTxt1} onPress={()=> {props.navigation.navigate({routeName: 'Loginscreen'})}}>Return to Login Page</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    justifyContent: 'center',
    
    backgroundColor: '#663D14',
   
    
  },
  header:{
    color: 'white',
    fontSize: 26,
    paddingTop: 28
 
    
  },
  header1:{flexDirection: 'row',
    height: 85,
    backgroundColor: '#663D14',
   
  justifyContent: 'center',
 
},
  container1: {
    flex: 1,
    padding: 30,
    paddingTop: 70,
    backgroundColor: 'black',
    
    
  },
  welcome:{
    fontSize: 40,
    textAlign: 'center',
   
   height: 70,
    fontFamily: "arial",
    color: "black",
    backgroundColor: 'white',
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
    
    
  },
  input: {

 width: "70%",
 backgroundColor: "#fff",
 padding: 15,
 marginBottom: 50,
 
 
  },
  userBtn: {
    backgroundColor: '#663D14',
    padding: 15,
    width: "45%",
    
  },
  lblTxt:{
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    //color: 'black',
    textAlign: 'left',
  }
  ,
  btnTxt: {
    fontSize: 18,
    textAlign: 'right',
    color: 'white',
    paddingRight: 5,
    backgroundColor: 'black',
    width: 80,
    
  },
  btnTxt1: {
    fontSize: 18,
    textAlign: 'right',
    color: 'white',
    paddingRight: 5,
   
    
    
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "90%",
    
  }
});
export default PasswordRecovery;