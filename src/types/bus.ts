export interface Bus {
  id: string;
  routeId: string;
  currentLocation: {
    lat: number;
    lng: number;
  };
  status: 'ON_TIME' | 'DELAYED' | 'AHEAD';
  nextStop: string;
  estimatedArrival: string;
}

export interface BusRoute {
  id: string;
  name: string;
  stops: BusStop[];
  color: string;
}

export interface BusStop {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
}