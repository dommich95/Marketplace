import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Modal, Button } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import defaultstyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import { FlatList } from 'react-native-gesture-handler';
import PickerItem from './PickerItem';

function AppPicker({icon,placeholder,items,onSelectItem, selectedItem}) {
const [modalVis, setModalVis] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVis(true)}>
                <View style={styles.container}>
                    { icon && <MaterialCommunityIcons name={icon} size={20} color={defaultstyles.colors.medium} style={styles.icon} />}

                    {selectedItem ? (
                        <AppText style={styles.text}>{selectedItem.label} </AppText>
                    ): (
                        <AppText style={styles.placeholder}>{placeholder}</AppText>
                    )}
                    <MaterialCommunityIcons name="chevron-down" size={20} color={defaultstyles.colors.medium}  />
                </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVis} animationType="slide">
            <Screen>
                <Button title="Close" onPress={() => setModalVis(false)} />
                <FlatList
                data={items}
                keyExtractor={item => item.value.toString()}
                renderItem={({item}) => <PickerItem 
                label={item.label}
                onPress={() => {
                    setModalVis(false);
                    onSelectItem(item)
                }}
                />}
                />
            </Screen>
        </Modal>
      </>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultstyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding:15,
        marginVertical: 10,
    },
    icon:{
        margin:10,
    },
    text:{
        flex: 1,
    },
    placeholder: {
        color: defaultstyles.colors.medium,
        flex: 1
    }
})

export default AppPicker;