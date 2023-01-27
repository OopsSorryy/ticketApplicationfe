import {CityResponse} from "./cityResponse";
export interface RouteResponse {
  routeId:number;
  fromCity:CityResponse;
  toCity:CityResponse;
}
