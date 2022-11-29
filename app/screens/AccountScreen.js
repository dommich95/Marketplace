import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeperator from '../components/ListItemSeperator';
import { color } from 'react-native-reanimated';

const menuItems= [
    {
        title: "My Listinings",
        icon: {
            name:"format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name:"email",
            backgroundColor: colors.secondary
        }
    }
]

function AccountScreen(props) {
    return (
      <Screen style={styles.screen}>
        <View style={styles.container}>
            <ListItem 
                title="Dominik Michel"
                subTitle= " dominikmichel1995@gmail.com"
                image = {require("../assets/dom.jpg")}
            />
        </View>
        <View style={styles.container}>
            <FlatList 
            data={menuItems}
            keyExtractor={item => item.title}
            ItemSeparatorComponent={ListItemSeperator}
            renderItem={({item}) => 
               <ListItem
                title={item.title}
                IconComponent={
                    <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                } 
                />
            }
            />
        </View>
        <ListItem
            title="Log out"
            IconComponent={
                <Icon name="logout" backgroudColor='#ffe66d' />
            }
        />
      </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light
    }
})

export default AccountScreen;