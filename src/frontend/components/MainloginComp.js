import React from 'react';
import {View, StyleSheet, Image,Text} from 'react-native';


const MainLoginComp = props =>{
    return(
        <View style={styles.container}>

            <Text style={styles.content}>Welcome UserName</Text>
            <Text style={styles.content1}> | </Text>
            <Text style={styles.content}>LogtOut</Text>
        </View>
    )};    


    const styles=StyleSheet.create({
content:{
    color: 'white',
    textDecorationLine: 'underline',
    textDecorationColor: 'white',
},
content1:{
    color: 'white',
   
},
container: {
    padding: 10,
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderColor: 'white',

    
}
    });

    export default MainLoginComp;
