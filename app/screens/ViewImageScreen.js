import React from 'react';
import {Image,StyleSheet,View} from "react-native"

import color from '../config/colors';
import AppText from '../components/AppText';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import ButtonScreen from './ButtonScreen';


function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="black" size={40}/>
            </View>
            <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="trash-can-outline" color="black" size={40}/>
            </View>
            <Image resizeMode='contain' style={styles.image} source = {require('../assets/chair.jpg')} />
            
       </View>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        flex: 1,
    },
   image:{
       width: "100%",
       height: "100%"
   },
   closeIcon:{
       position:"absolute",
       top: 40,
       left: 30,
   }, 
   deleteIcon:{
       position:"absolute",
       top: 40,
       right: 30,
   }, 
})


export default ViewImageScreen;