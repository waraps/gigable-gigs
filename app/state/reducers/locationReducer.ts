import { IAction } from "../../types/interface/IAction";
import { ILocation } from "../../types/interface/ILocation";

import { SET_LOCATION } from "../actions/locationAction";

type State = {
  location?: ILocation | null;
};

const initialState: State = {
  location: null,
};

const locationReducer = (state: State = initialState, action: IAction) => {
  switch (action.type) {
    case SET_LOCATION: {
      return {
        ...state,
        location: action.payload,
      };
    }

    default:
      return state;
  }
};

export default locationReducer;
