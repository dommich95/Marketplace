import React from 'react';
import NativeAccessibilityInfo from 'react-native/Libraries/Components/AccessibilityInfo/NativeAccessibilityInfo';
import {ImageBackground, StyleSheet,View, Image,Text} from "react-native";
import AppButton from './ButtonScreen';
import App from '../../App';


function WelcomeScreen(props) {
    return (
        <ImageBackground 
            blurRadius={10}
            style={style.background}
            source = {require('../assets/background.jpg')}
        >
            <View style={style.logoContainer}>
                <Image style={style.logo} source = {require('../assets/logo-red.png')}/>
                <Text style={style.tagline} >Sell what you don't need</Text> 
            </View>
            <View style={style.buttonContainer}>
                <AppButton title="Login" />
                <AppButton title="Register"  color="secondary"/> 
            </View>
        </ImageBackground>
    );
}

const style = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent:"flex-end",
        alignItems: "center"
    },
    logoContainer:{
        position: 'absolute',
        top: 70,
        alignItems: "center"
    },
    logo: {
        width:100,
        height:100,
        position: 'absolute',
        top: 70,
    },
    buttonContainer: {
        padding:20,
        width: "100%",
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,

    }
})

export default WelcomeScreen;