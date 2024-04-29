import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import QRScanner from "./screens/Qr-scanner";
import QRGenerator from "./screens/Qr-generator";

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
          labelStyle: {
            fontSize: 12,
          },
          style: {
            backgroundColor: "white",
          },
        }}
      >
        <Tab.Screen name="Scanner" component={QRScanner} />
        <Tab.Screen name="Generator" component={QRGenerator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
