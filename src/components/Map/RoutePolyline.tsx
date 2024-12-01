import { Polyline, Marker, Popup } from 'react-leaflet';
import { BusRoute } from '../../types/bus';
import { Icon } from 'leaflet';

interface RoutePolylineProps {
  route: BusRoute;
  stopIcon: Icon;
}

export default function RoutePolyline({ route, stopIcon }: RoutePolylineProps) {
  return (
    <div>
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
  );
}