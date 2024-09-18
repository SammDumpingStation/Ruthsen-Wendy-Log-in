import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";

const TabsLayout = () => {
  const TabIcon = ({ icon, color, name, focused }) => {
    return (
      <View className="items-center justify-center gap-2">
        <Image
          source={icon}
          className="h-6 w-6"
          resizeMode="contain"
          tintColor={color}
        />
        <Text
          className={`${
            focused
              ? "font-semibold text-[#FF987E]"
              : "font-normal text-[#BA9393]"
          } text-xs`}
        >
          {name}
        </Text>
      </View>
    );
  };
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FF987E",
          tabBarInactiveTintColor: "#BA9393",
          tabBarStyle: {
            backgroundColor: "#FFF7F7",
            height: 80,
            borderTopColor: "#FFF7F7",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            headerShown: false,
            title: "Calendar",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.calendar}
                color={color}
                name="Compare "
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            headerShown: false,
            title: "Chat",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.chat}
                color={color}
                name="Search"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
