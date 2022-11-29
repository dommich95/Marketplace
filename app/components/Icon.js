import React from 'react';
import {SafeAreaView, View} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

function Icon({
    name,
    size = 40,
    backgroundColor = "#000",
    iconColor = "#fff"
}) {
    return (
        <SafeAreaView>
            <View style={{
                width:size,
                height:size,
                borderRadius: size / 2,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor,
            }}>
                <MaterialCommunityIcons name={name} color={iconColor}  size={size * 0.5} />
            </View>
        </SafeAreaView>
    );
}

export default Icon;