import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import TasksScreen from "./screens/TasksScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import TaskDetailsScreen from "./screens/TaskDetailsScreen";
import { ApolloProvider } from '@apollo/client';
import { client } from "./graphql/Client";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "All Tasks") {
            iconName = focused ? "file-tray-full" : "file-tray-full-outline";
          } else if (route.name === "Notifications") {
            iconName = focused ? "notifications" : "notifications-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FF00FF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      {/* <Tab.Screen name="Home" component={Home} /> */}
      <Tab.Screen
        name="All Tasks"
        component={TasksScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tasks"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Task Details"
            component={TaskDetailsScreen}
            options={{ headerShown: false }}
            getId={({ params }) => params.taskId}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
