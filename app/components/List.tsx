import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, SectionList } from "react-native";

// Components
import Card from "./Card";
import ActivityIndicatorList from "./ActivityIndicatorList";
import CardHeaderList from "./CardHeaderList";

// API
import { APIGigs } from "../api/index";

// Types
import { IGig } from "../types/interface/IGig";

// Redux
import { useSelector } from "react-redux";

type FormattedGig = {
  title: string;
  data: IGig[];
};

const List = () => {
  const locationState = useSelector((state) => state.locationReducer);
  const { location } = locationState;
  const [gigs, setGigs] = useState<FormattedGig[]>([{ title: "", data: [] }]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    getGigs();
  }, []);

  const FormateArray = (data: IGig) => {
    const groups = data.reduce((groups: Array<IGig>, gig: IGig) => {
      const date = gig.startDate.date;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(gig);
      return groups;
    }, {});

    const groupArrays = Object.keys(groups).map((date) => {
      const formatDate = new Date(date);
      return {
        title: formatDate.toDateString(),
        data: groups[date],
      };
    });

    return groupArrays;
  };

  const getGigs = async () => {
    try {
      setLoading(true);
      const response = await APIGigs.get(
        page,
        location.latitude,
        location.longitude
      );
      const { items } = response;
      const formated: FormattedGig[] = FormateArray(items);
      setGigs(gigs.concat(formated));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const loadMoreGigs = async () => {
    setPage(page + 1);
    getGigs();
  };

  const keyExtractor = (item: IGig) => item.id.toString();

  return (
    <SafeAreaView>
      <SectionList
        contentContainerStyle={{
          padding: 10,
        }}
        sections={gigs}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => <Card gig={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <CardHeaderList title={title} />
        )}
        onEndReached={loadMoreGigs}
        onEndReachedThreshold={0}
        scrollEventThrottle={150}
        ListFooterComponent={loading ? <ActivityIndicatorList /> : null}
      />
    </SafeAreaView>
  );
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

export default List;
