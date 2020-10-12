import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,
         TextInput,
         TouchableOpacity,
       
      } from 'react-native';


const Login = props => {
  
  return (
    
    <View style={styles.container}>
      <Text style={styles.welcome}>WELCOME</Text>

      <View style={styles.brownBox}>
            <View style={styles.lblTxt}>
                <Text  style={styles.lblColor}>USER NAME</Text>
            </View>
      
      <TextInput style={styles.input}  label = "User Name"></TextInput>

       <View style={styles.lblTxt}>
      <Text style={styles.lblColor}>PASSWORD</Text>
      </View>
       <TextInput style={styles.input}  secureTextEntry></TextInput>
        <View style={styles.padding}></View>
      <View style={styles.btnContainer}>
     
      <View style={styles.forgetpw}>
        <Text style={styles.btnTxt} onPress={()=> {
  props.navigation.navigate({routeName: 'PwRecovery'})
}}>Forgot Password </Text>
      </View>
      
      
      </View>
    </View>
    <View>
    <TouchableOpacity style={{paddingTop: 20}}> 
        <Text style={styles.btnTxt} onPress={()=> {
  props.navigation.navigate({routeName: 'Signup'})
}}>Create a New Account</Text>
      </TouchableOpacity>
     
      <TouchableOpacity>
      
        <Text style={styles.btnTxt} onPress={()=> {
  props.navigation.navigate({routeName: 'Main'})
}}>Login</Text>
      </TouchableOpacity>
      </View>
    </View>
   
  )};



const styles = StyleSheet.create({
  container1: {
    flex: 1,
    paddingLeft: 30,
    justifyContent: 'center',
    backgroundColor: '#663D14',
    margin: 40
  },
  container: {
    flex: 1,
        backgroundColor: '#000000',
    
    
  },
  lblColor:{
    color: 'white',
  },

  welcome:{
    backgroundColor: '#ffffff',
        fontWeight: 'bold',
        width: '100%',
        marginTop:'20%',
        paddingTop:'2%',
        paddingBottom:'2%',
        textAlign: 'center',
        fontSize: 50,
    
  },

brownBox: {
  paddingTop: 50,
    backgroundColor: '#663b13',
    marginLeft: '7%',
    marginRight: '7%',
    height: 450
},
forgetpw:{ paddingLeft: 30,
          paddingTop: 5},

  input: {
 width: "60%",
 backgroundColor: "#fff",
 padding: 10,
 marginLeft: 30
  },
  userBtn: {
    backgroundColor: '#663D14',
    padding: 15,
    width: "45%",
    
  },
  lblTxt:{
    paddingTop: 60,
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
   
    textAlign: 'left',
    marginLeft: 30
  }
  ,
  btnTxt: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    textDecorationLine: 'underline'
  
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "90%",
    

  }
  
});

export default Login;