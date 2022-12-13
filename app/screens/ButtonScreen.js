import React from "react";
import { StyleSheet,Text,TouchableOpacity } from "react-native";
import colors from "../config/colors";

function ButtonScreen({title, onPress, color= 'primary'}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>    
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
        button: {
            backgroundColor: "red",
            borderRadius:25,
            justifyContent: 'center',
            alignItems: 'center',
            padding:15,
            width:'100%',
            marginTop: 10,
        },
        text: {
            color: 'white',
            fontSize: 18,
            textTransform: 'uppercase',
            fontWeight: 'bold',
        },
    });

export default ButtonScreen;