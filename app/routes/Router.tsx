import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "../screens/Home";
import GigsList from "../screens/GigsList";
import GigDetails from "../screens/GigDetails";

// Types
import { RootStackParamList } from "../types/ScreensProps/MainStackNavigatorTypes";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="List"
          component={GigsList}
          options={{
            title: "Gigs",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#2026DF",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Details"
          component={GigDetails}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#2026DF",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
