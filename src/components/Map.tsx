import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Bus, BusRoute } from '../types/bus';
import { Bus as BusIcon } from 'lucide-react';
import { createMapIcons } from '../utils/mapUtils';
import 'leaflet/dist/leaflet.css';
import '../styles/leaflet-fixes.css';

interface MapProps {
  buses: Bus[];
  routes: BusRoute[];
  selectedRoute?: string;
}

export default function Map({ buses, routes, selectedRoute }: MapProps) {
  // Center coordinates for Shoolini University
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
          <div key={route.id}>
            <Polyline
              positions={route.stops.map(stop => [stop.location.lat, stop.location.lng])}
              color={route.color}
              weight={3}
            />
            {route.stops.map(stop => (
              <Marker
                key={stop.id}
                position={[stop.location.lat, stop.location.lng]}
                icon={stopIcon}
              >
                <Popup>
                  <div className="font-semibold">{stop.name}</div>
                </Popup>
              </Marker>
            ))}
          </div>
        ))}

      {buses
        .filter(bus => !selectedRoute || bus.routeId === selectedRoute)
        .map(bus => (
          <Marker
            key={bus.id}
            position={[bus.currentLocation.lat, bus.currentLocation.lng]}
            icon={busIcon}
          >
            <Popup>
              <div className="p-2">
                <div className="font-semibold">Bus {bus.id}</div>
                <div className="text-sm">Next Stop: {bus.nextStop}</div>
                <div className={`text-sm ${
                  bus.status === 'DELAYED' ? 'text-red-500' :
                  bus.status === 'AHEAD' ? 'text-green-500' :
                  'text-blue-500'
                }`}>
                  Status: {bus.status}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}