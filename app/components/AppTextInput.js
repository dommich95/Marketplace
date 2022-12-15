import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import defaultstyles from '../config/styles';

function AppTextInput({icon, width, ...otherProps}) {
    return (
      <View style={[styles.container, {width}]}>
        { icon && <MaterialCommunityIcons name={icon} size={20} color={defaultstyles.colors.medium} style={styles.icon} />}
        <TextInput 
          placeholderTextColor={defaultstyles.colors.medium}
          style={defaultstyles.text} {...otherProps}></TextInput>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultstyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding:15,
        marginVertical: 10,
    },
    icon:{
        margin:10,
    }
})

export default AppTextInput;