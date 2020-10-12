import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,
         TextInput,
         TouchableOpacity, Button,
         Label, TouchableWithoutFeedback
      } from 'react-native';
import { withOrientation } from 'react-navigation';
import Contentborder from '../components/Contentborder';
import MainloginComp from '../components/MainloginComp';
import Returntologin from '../components/Returntologin';

const MainPage = props => {
  
  //require('../assets/hand.jpg')
  return (
    
    <View style={styles.container}>

      <Text style={styles.logo}>Main Page</Text>
      
      <View style={styles.container1}>
      <MainloginComp/>
      <Contentborder title="Community Outreach Page" imgsrc={require('../assets/hand.jpg')}/>
      <TouchableOpacity onPress={()=> {
  props.navigation.navigate({routeName: 'Prevent'})
}}>
        <Contentborder title="How to Prevent the Spreading of COVID-19" imgsrc={require('../assets/govt.jpg')} />
        </TouchableOpacity>
        <Contentborder title="Government Assistence Programs" imgsrc={require('../assets/stop.jpg')}/>
        
        <Returntologin/>
    </View>
   
    
    </View>
    
  )};



const styles = StyleSheet.create({
  container:{
    backgroundColor: '#663D14',
    
  },
  container1:{
    backgroundColor: 'black',
    height: 700,
    
  },
  text:{
    color: 'white'
  },
  logo:{color: 'white',
  fontSize: 30,
  textAlign: 'center',
  padding: 16

},

  
});

export default MainPage;