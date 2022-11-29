import React, {useState} from 'react';
import { FlatList, StyleSheet, Platform, StatusBar, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen';



const initialMessages= [
    {  
        id: 1,
        title: 'T1',
        decription: 'D1',
        image: require('../assets/dom.jpg')
    },
    {  
        id: 2,
        title: 'T2',
        decription: 'D2',
        image: require('../assets/dom.jpg')
    },
    {  
        id: 3,
        title: 'T3',
        decription: 'D3',
        image: require('../assets/dom.jpg')
    }
]

function MessagesScreen({onPress}) {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)
    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id));
    }
    return (
        <Screen>
            <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => (
                <ListItem 
                    title={item.title}
                    subTitle={item.decription}
                    image={item.image}
                    onPress={() => console.log()}
                    renderRightActions= {() => 
                        <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                />
            )}
            ItemSeparatorComponent={ListItemSeperator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {  
                        id: 3,
                        title: 'T3',
                        decription: 'D3',
                        image: require('../assets/dom.jpg')
                    }
                ])
            }}
            />
        </Screen>
    );
}
// const styles = StyleSheet.create({
//     screen: {
//         paddingTop: Constants.StatusBarHeight
//     }
// })


export default MessagesScreen;