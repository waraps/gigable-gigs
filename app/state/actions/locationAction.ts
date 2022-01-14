import { ILocation } from "../../types/interface/ILocation";

export const SET_LOCATION = "SET_LOCATION";

export const set_location = (location: ILocation) => {
  return {
    type: SET_LOCATION,
    payload: location,
  };
};
