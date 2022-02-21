import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import LoginScreen from "./screens/LoginScreen";
import TasksScreen from "./screens/TasksScreen";
import NotificationsScreen from "./screens/NotificationsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Login') {
            iconName = focused ? 'log-in' : 'log-in-outline';
          } else if (route.name === 'Tasks') {
            iconName = focused ? 'file-tray-full' : 'file-tray-full-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } 
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FF00FF",
        tabBarInactiveTintColor: "gray",
      })}
        >
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Tasks"
          component={TasksScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
