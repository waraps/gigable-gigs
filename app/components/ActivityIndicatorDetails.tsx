import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const ActivityIndicatorDetails = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.loading}>
        <ActivityIndicator color="#1D234B" size={40} />
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
    width: 60,
    height: 60,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});

export default ActivityIndicatorDetails;
