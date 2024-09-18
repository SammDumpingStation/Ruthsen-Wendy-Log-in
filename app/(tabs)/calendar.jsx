import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Calendar = () => {
  return (
    <SafeAreaView className="bg-[#FFF7F7] h-full px-[14px] pt-6 flex-1">
      <ScrollView
        contentContainerStyle={{
          minHeight: "100%",
        }}
      >
        <Text>This is Calendar</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Calendar;
