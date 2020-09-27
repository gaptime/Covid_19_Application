import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

const SignIn = () => {
    const [value, onChangeText] = React.useState();
    return(
        <View style={styles.container}>
            <Text style={styles.welcome}>WELCOME</Text>

            <View style={styles.brownBox}>
                <View style={styles.partialBrownBox}>
                    <Text style={styles.inputName}>USERNAME</Text>
                    <TextInput
                        style={styles.inputArea}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                </View>


                <View style={styles.partialBrownBox}>
                    <Text style={styles.inputName}>PASSWORD</Text>
                    <TextInput
                        style={styles.inputArea}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgetPassword}>
                        Forgot Password
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <Text style={styles.createNewAccount}>
                    Create a New Account
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        // alignItems: 'center',

    },
    welcome: {
        backgroundColor: '#ffffff',
        fontWeight: 'bold',
        width: '100%',
        marginTop:'30%',
        paddingTop:'2%',
        paddingBottom:'2%',
        textAlign: 'center',
        fontSize: 50,
    },

    inputName: {
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 20,
    },

    inputArea: {
        height: 60,
        backgroundColor: '#ffffff',
        width: '70%',
        textAlign: 'center',
    },

    partialBrownBox: {
        paddingTop: '20%',
        paddingBottom: '5%',
        paddingLeft: '7%'
    },

    brownBox: {
        backgroundColor: '#663b13',
        marginLeft: '7%',
        marginRight: '7%',
    },

    forgetPassword:{
        textDecorationLine: 'underline',
        color: '#ffffff',
        paddingBottom: '30%',
        paddingLeft: '7%',
        fontWeight: 'bold',
        fontSize: 20,
    },

    createNewAccount:{
        textAlign: 'center',
        color: '#ffffff',
        paddingTop: '10%',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize: 20,
    }
});
