import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// Types
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/ScreensProps/MainStackNavigatorTypes";
import { IGig } from "../types/interface/IGig";
import { useNavigation } from "@react-navigation/native";

interface ICard {
  gig: IGig;
}

const Card: React.FunctionComponent<ICard> = ({ gig }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("Details", {
          id: gig.id,
        })
      }
    >
      <View style={styles.cardFirstSection}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.avatar}
            source={{
              uri: gig.user.avatar,
            }}
          />
          <View style={{ marginLeft: 8 }}>
            <Text>{gig.user.displayname}</Text>
            <Text style={styles.grayText}>{gig.tags[0].name}</Text>
          </View>
        </View>
        <View>
          {gig.costHour > 0 && (
            <Text style={{ fontSize: 16 }}>
              {gig.currency.symbol} {gig.costHour}{" "}
              <Text style={styles.grayText}>Hourly</Text>
            </Text>
          )}
          {gig.costActivity > 0 && (
            <Text style={{ fontSize: 16 }}>
              {gig.currency.symbol} {gig.costActivity}{" "}
              <Text style={styles.grayText}>Delivery</Text>
            </Text>
          )}
          {gig.costGig > 0 && (
            <Text style={{ fontSize: 16 }}>
              {gig.currency.symbol} {gig.costGig}{" "}
              <Text style={styles.grayText}>Per km</Text>
            </Text>
          )}
        </View>
      </View>
      <View style={styles.cardSecondSection}>
        <View>
          <View style={styles.cardSecondSectionPartOne}>
            <Ionicons
              name="ios-location-outline"
              size={20}
              color="#666"
              style={{ marginLeft: 14 }}
            />
            <Text style={{ marginLeft: 25 }}>{gig.distance} km</Text>
          </View>
          <View style={styles.cardSecondSectionPartTwo}>
            <AntDesign
              name="clockcircleo"
              size={15}
              color="#666"
              style={{ marginLeft: 17 }}
            />
            <Text style={styles.cardSecondSectionDate}>
              {gig.startDate.time} - {gig.endDate.time}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.cardSecondSectionButton}
          onPress={() => alert("Apply")}
        >
          <AntDesign name="pluscircle" size={20} color="#fff" />
          <Text style={{ color: "#fff", marginLeft: 10 }}>Apply</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 5,
    marginVertical: 6,
  },
  cardFirstSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#2026DF",
  },
  cardSecondSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardSecondSectionPartOne: {
    flexDirection: "row",
    alignContent: "flex-end",
  },
  cardSecondSectionPartTwo: {
    flexDirection: "row",
    alignContent: "flex-end",
    alignItems: "center",
  },
  cardSecondSectionDate: {
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginLeft: 20,
  },
  cardSecondSectionButton: {
    flexDirection: "row",
    backgroundColor: "#2026DF",
    padding: 15,
    borderRadius: 15,
    width: 140,
    justifyContent: "center",
  },
  grayText: {
    color: "#666",
  },
});

export default Card;
