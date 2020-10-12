import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const PreventScreen = (props)=> {
    return (
        <View >
            <View style={styles.header}>
            <Text style={styles.headerTxT}>How to Prevent the Spread of Covid-19</Text>
            </View>
            <View style={styles.buttonsContainer}>
            <Text  style={styles.buttonText}>Ways to Better this Pandemic </Text>
            <Text style={styles.buttonText1}>Information about Covid-19</Text>
            <Text style={styles.buttonText}> Stories of Adapting to a New Normal</Text>
            </View>

            <View style={styles.body}>

            </View>
            <View style={styles.body2}>
                <Text style={styles.footer} onPress={()=> {props.navigation.navigate({routeName: 'Loginscreen'})}}> Return to Main Page</Text>
            </View>
        </View>
    )
};

const styles=StyleSheet.create({
header:{
    backgroundColor: '#b9e97b',
    height: 80,
    justifyContent: 'center',
   
    
},
headerTxT:{fontSize: 28,
    textAlign: 'center',
    paddingLeft: 40,
    paddingRight: 40

},

buttonsContainer: {
    flexDirection: 'row',
     alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      height: 205
},
buttonText:{
    flex: 1,
    alignContent: 'space-between',
    backgroundColor: '#b9e97b',
    marginTop: 70,
    marginBottom: 50,
    textAlign: "center",
    fontSize: 20
    
},
buttonText1:{
    flex: 1,
    alignContent: 'space-between',
    backgroundColor: '#b9e97b',
    marginTop: 70,
    marginBottom: 50,
    marginLeft: 8,
    marginRight: 8,
    textAlign: "center",
    fontSize: 20
},
body:{
    backgroundColor: '#b9e97b',
    height: 300
},
body2:{
    backgroundColor: 'black',
    height: 153,
    justifyContent: 'flex-end',
    
},
footer: {
    color: 'white',
    paddingLeft: 235,
    textDecorationLine: 'underline',
    fontSize: 16
    
}

});

export default PreventScreen;