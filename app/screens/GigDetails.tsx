import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

// API
import { APIGigs } from "../api/index";

// Components
import ActivityIndicatorDetails from "../components/ActivityIndicatorDetails";

// Types
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/ScreensProps/MainStackNavigatorTypes";
import { IGig } from "../types/interface/IGig";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const GigDetails = ({ route }: Props) => {
  const [gig, setGig] = useState<IGig | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { id } = route.params;

  useEffect(() => {
    getGig();
  }, []);

  const getGig = async () => {
    try {
      setLoading(true);
      const response: IGig = await APIGigs.getOne(id);
      setGig(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  if (loading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicatorDetails />
        <Text style={{ marginTop: 15, fontSize: 18 }}>Loading data ...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.sectionOne}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.avatar}
            source={{
              uri: gig?.user.avatar,
            }}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{gig?.user.displayname}</Text>
            <Text style={styles.description}>{gig?.tags[0].name}</Text>
          </View>
        </View>
        <View>
          <Text
            style={[
              { backgroundColor: gig?.active ? "#00D1B2" : "#E64743" },
              styles.status,
            ]}
          >
            {gig?.status ? "AVAILABLE" : "UNAVAILABLE"}
          </Text>
          <Text>#{gig?.id}</Text>
        </View>
      </View>
      {gig && gig.deliveryGig.categories.length > 0 && (
        <View>
          <Text>Delivery Driver Categories:</Text>
          <View style={{ flexDirection: "row" }}>
            {gig?.deliveryGig.categories.map((category) => {
              return (
                <Text key={category.id} style={styles.pill}>
                  {category.name}
                </Text>
              );
            })}
          </View>
        </View>
      )}
      <View>
        <Text>{gig?.description}</Text>
      </View>
      <View style={styles.sectionTwo}>
        <Text style={styles.subtitle}>Dates</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ fontWeight: "bold" }}>From</Text>
            <Text>{gig?.startDate.timestamp.toString()}</Text>
            <Text style={{ fontWeight: "bold" }}>To</Text>
            <Text>{gig?.endDate.date}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}>Working hours</Text>
            <Text>21:30 to 21:30</Text>
          </View>
        </View>
        <Text style={styles.subtitle}>Rates</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {gig && gig?.costHour > 0 && (
            <View>
              <Text style={{ fontWeight: "bold" }}>Per hour</Text>
              <Text>
                {gig?.currency.symbol} {gig?.costHour}{" "}
              </Text>
            </View>
          )}
          {gig && gig?.costActivity > 0 && (
            <View>
              <Text style={{ fontWeight: "bold" }}>Per delivery</Text>
              <Text>
                {gig?.currency.symbol} {gig?.costActivity}{" "}
              </Text>
            </View>
          )}
          {gig && gig?.costGig > 0 && (
            <View>
              <Text style={{ fontWeight: "bold" }}>Per km</Text>
              <Text>
                {gig?.currency.symbol} {gig?.costGig}{" "}
              </Text>
            </View>
          )}
        </View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: gig ? gig.lat : 0,
            longitude: gig ? gig.lng : 0,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: gig ? gig.lat : 0,
              longitude: gig ? gig.lng : 0,
            }}
          />
        </MapView>
        <Text style={{ fontWeight: "bold" }}>Pick-up location</Text>
        <Text>{gig?.address.formatted_address}</Text>
        <Text style={{ fontWeight: "bold" }}>Drop-off location</Text>
        <Text>{gig?.address.formatted_address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionOne: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  infoContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
  },
  description: {
    fontSize: 25,
    fontWeight: "bold",
  },
  status: {
    borderRadius: 8,
    padding: 5,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  pill: {
    margin: 5,
    padding: 5,
    borderRadius: 8,
    backgroundColor: "#3298DC",
    color: "#f5f5f5",
    textAlign: "center",
  },
  sectionTwo: {},
  subtitle: {
    fontSize: 25,
  },
  map: {
    width: Dimensions.get("window").width,
    height: 300,
    marginBottom: 10,
  },
});

export default GigDetails;
