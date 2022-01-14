import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

// Types
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/ScreensProps/MainStackNavigatorTypes";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { set_location } from "../state/actions/locationAction";

const Home = () => {
  const locationState = useSelector((state) => state.locationReducer);
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    requestLocation();
  }, []);

  const requestLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      dispatch(set_location({ latitude: 53.33306, longitude: -6.24889 }));
    } catch (error) {
      console.log(error);
    }
  };

  const explore = async () => {
    const { location } = locationState;
    try {
      requestLocation();
      if (location === null) {
        requestLocation();
      } else {
        navigation.navigate("List");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={styles.logo}
        source={require("../../assets/gigable-logo.png")}
      />
      <Text style={styles.title}>Welcome to Gigable</Text>
      <View style={styles.exploreContainer}>
        <TouchableOpacity style={styles.exploreButton} onPress={explore}>
          <Text style={styles.exploreButtonTitle}>Explore Gigs</Text>
        </TouchableOpacity>
        <Text style={styles.exploreText}>Discover our Gigs</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  logo: {
    width: 280,
    height: 92,
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    color: "#1D234B",
  },
  exploreContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  exploreButton: {
    width: 350,
    padding: 25,
    margin: 5,
    borderRadius: 8,
    backgroundColor: "#2026DF",
  },
  exploreButtonTitle: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
  },
  exploreText: {
    color: "#1D234B",
  },
});

export default Home;
