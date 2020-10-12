import React from 'react';
import {View, StyleSheet, Image,Text} from 'react-native';

const Contentborder =  ({title, imgsrc, link}) =>{

 
return(

    <View style={styles.container}>
        <View style={styles.container1}>
        <Image source={imgsrc} />
        </View>
        <View  style={styles.container1}>
        <Text style={styles.text}> {title}
       
        </Text>
        </View>
        
    </View>
)

};

const styles=StyleSheet.create({

    container: {
        
        paddingLeft: 15,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
       
        paddingTop: 40,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingBottom: 20,
        

    }, container1:{
      
        flex: 1,
       
        
    }
    ,text:{
        color: 'white',
        fontSize: 20,
        textDecorationLine: 'underline'
      },
});

export default Contentborder;