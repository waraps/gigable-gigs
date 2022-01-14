import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const ActivityIndicatorList = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.loading}>
        <ActivityIndicator color="#444" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});

export default ActivityIndicatorList;
