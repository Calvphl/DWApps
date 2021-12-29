import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../constants";

const User = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 25,
          paddingHorizontal: 30,
          paddingVertical: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 10 }}>
          🛠
        </Text>
        <Text style={{ fontSize: 15, textAlign: "center" }}>
          Sorry, this page is still under development
        </Text>
        <Text style={{ fontSize: 15, textAlign: "center" }}>
          you can go to another tab..
        </Text>
      </View>
    </View>
  );
};

export default User;
