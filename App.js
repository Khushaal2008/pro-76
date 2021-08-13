import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyPic from './screens/DailyPic';
import SpaceCrafts from './screens/SpaceCrafts';
import StarMap from './screens/StarMap';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StackUtils from 'stack-utils';

function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="HomeScreen" screenOption={{
       headerShown:false
     }}>
       <Stack.Screen name = "HomeScreen" component= {HomeScreen}/>
       <Stack.Screen name = "DailyPic" component = {DailyPic}/>
       <Stack.Screen name = "SpaceCrafts" component={SpaceCrafts}/>
       <Stack.Screen name = "StartMap" component = {StarMap}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;
