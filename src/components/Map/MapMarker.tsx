import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Bus } from '../../types/bus';
import { formatArrivalTime } from '../../utils/timeUtils';
import BusStatus from '../BusInfo/BusStatus';

interface MapMarkerProps {
  bus: Bus;
  icon: Icon;
}

export default function MapMarker({ bus, icon }: MapMarkerProps) {
  return (
    <Marker
      position={[bus.currentLocation.lat, bus.currentLocation.lng]}
      icon={icon}
    >
      <Popup>
        <div className="p-2">
          <div className="font-semibold">Bus {bus.id}</div>
          <div className="text-sm">Next Stop: {bus.nextStop}</div>
          <div className="text-sm">
            {formatArrivalTime(bus.estimatedArrival)}
          </div>
          <BusStatus status={bus.status} />
        </div>
      </Popup>
    </Marker>
  );
}