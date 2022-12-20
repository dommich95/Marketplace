import React, { useEffect } from "react";
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import { Button, Image } from "react-native";
import { useState } from "react";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import AppText from "./app/components/AppText";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import {MaterialCommunityIcons} from '@expo/vector-icons'
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AuthNavigator from "./app/navigation/AuthNavigation";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
)

const Account = () => <Screen><AppText>Account</AppText></Screen>
const Tweets = () => <Screen><AppText>Tweets</AppText></Screen>
const TweetDetails = () => <Screen><AppText>Tweet Details</AppText></Screen>

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
  //   tabBarOptions={{ 
  //     activeBackgroundColor: 'tomato',
  //     activeTintColor: 'white'
  //   }}
  >
    <Tab.Screen 
      name="Home" 
      component={ListingsScreen}
      options={{
        tabBarIcon: ({size,color}) => <MaterialCommunityIcons name="home" size={size} color={color} /> 
      }}
      />
    <Tab.Screen 
      name="Add" 
      component={ListingEditScreen}
      options={{
        tabBarIcon: ({size,color}) => <MaterialCommunityIcons name="home" size={size} color={color} /> 
      }}
      />
    <Tab.Screen 
      name="Account" 
      component={AccountScreen}
      options={{
        tabBarIcon: ({size,color}) => <MaterialCommunityIcons name="account" size={size} color={color} /> 
      }}
      />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme} >
      <AppNavigator />
    </NavigationContainer>
  );
}
