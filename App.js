import { StatusBar } from 'expo-status-bar';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ButtonScreen from './app/screens/ButtonScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import colors from './app/config/colors';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import { useState } from 'react';
import {TextInput, View, Text, Switch} from "react-native"
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';

const cat =[
  {label: "Furniture", value: 1},
  {label: "Cars", value: 2},
  {label: "Humans", value: 3},
]

export default function App() {

  const [category, setCategory] = useState(cat[0])

  return (
    <Screen>
      <LoginScreen />
    </Screen>
  )
}
