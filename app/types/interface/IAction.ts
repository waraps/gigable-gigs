import { ILocation } from "./ILocation";

export interface IAction {
  type: string;
  payload?: ILocation;
}
