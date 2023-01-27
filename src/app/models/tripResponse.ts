import { RouteResponse} from "./routeResponse";
import { VehicleResponse} from "./vehicleResponse";

export interface TripResponse {
  tripId:number;
  departureDate:Date;
  departureTime:Date;
  price:number;
  routeResponse:RouteResponse;
  vehicleResponse:VehicleResponse;
}
