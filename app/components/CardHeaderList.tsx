import React from "react";
import { StyleSheet, Text } from "react-native";

interface ICard {
  title: string;
}

const Card: React.FunctionComponent<ICard> = ({ title }) => {
  return <Text style={styles.header}>{title}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    color: "#444",
    padding: 10,
    borderRadius: 16,
    elevation: 2,
    backgroundColor: "#f4f4f4",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.2,
    shadowRadius: 1,
    marginHorizontal: 5,
    marginVertical: 6,
  },
});

export default Card;
