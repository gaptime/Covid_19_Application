import React from 'react';
import {View, StyleSheet, Image,Text} from 'react-native';

const Returntologin = props =>{
    return(
        <View>
            <Text style={styles.button}    
           >Return to Login Page</Text>
        </View>
    )};

    const styles=StyleSheet.create({
        button:{
            color: 'white',
            alignSelf: 'flex-end',
            paddingTop: 200,
            paddingRight: 5,
           
            
            
          
          }

    });
    export default Returntologin;