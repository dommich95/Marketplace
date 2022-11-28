import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/ListItem';

const messags= [
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

function MessagesScreen(props) {
    return (
     <FlatList
     data={messages}
     keyExtractor={message => message.id.toString()}
     renderItem={({item}) => 
     <ListItem 
        title={item.title}
        subTitle={item.decription}
        image={item.image}
     />}/>
    );
}

export default MessagesScreen;