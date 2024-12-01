import { MapContainer, TileLayer } from 'react-leaflet';
import { Bus, BusRoute } from '../../types/bus';
import { createMapIcons } from '../../utils/mapUtils';
import MapMarker from './MapMarker';
import RoutePolyline from './RoutePolyline';
import 'leaflet/dist/leaflet.css';
import '../../styles/leaflet-fixes.css';

interface MapProps {
  buses: Bus[];
  routes: BusRoute[];
  selectedRoute?: string;
}

export default function Map({ buses, routes, selectedRoute }: MapProps) {
  const defaultPosition: [number, number] = [30.8574, 77.1639];
  const { busIcon, stopIcon } = createMapIcons();

  return (
    <MapContainer
      center={defaultPosition}
      zoom={15}
      className="w-full h-[600px] rounded-lg shadow-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {routes
        .filter(route => !selectedRoute || route.id === selectedRoute)
        .map(route => (
          <RoutePolyline
            key={route.id}
            route={route}
            stopIcon={stopIcon}
          />
        ))}

      {buses
        .filter(bus => !selectedRoute || bus.routeId === selectedRoute)
        .map(bus => (
          <MapMarker
            key={bus.id}
            bus={bus}
            icon={busIcon}
          />
        ))}
    </MapContainer>
  );
}