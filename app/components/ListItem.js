import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native'
import AppText from './AppText';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight
                    underlayColor={colors.light} 
                    onPress={onPress}>
                    <View style={styles.container}>
                        {IconComponent}
                        {image && <Image style={styles.image} source={image} />}
                        <View style={styles.detailContainer}>
                            <AppText numberOfLines={1} style={styles.title}>{title}</AppText>
                            {subTitle && <AppText  numberOfLines={2} style={styles.subTitle}>{subTitle}</AppText>}
                        </View>
                        <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25}/>
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    detailContainer: {
        marginLeft:10,
        justifyContent: "center",
        flex: 1,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        
    }, 
    title: {
       fontWeight: "400," 

    },
    subTitle: {
        color: colors.medium,
    },
})

export default ListItem;