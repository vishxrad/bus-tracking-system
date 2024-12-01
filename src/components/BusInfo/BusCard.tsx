import { Bus, BusRoute } from '../../types/bus';
import { Bus as BusIcon, Clock, MapPin } from 'lucide-react';
import { formatArrivalTime } from '../../utils/timeUtils';
import BusStatus from './BusStatus';

interface BusCardProps {
  bus: Bus;
  route?: BusRoute;
}

export default function BusCard({ bus, route }: BusCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-2">
        <BusIcon className="text-blue-500" />
        <span className="font-medium">Bus {bus.id}</span>
        <span className="text-sm text-gray-500">({route?.name})</span>
      </div>
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Next Stop: {bus.nextStop}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>
            {formatArrivalTime(bus.estimatedArrival)}
          </span>
        </div>
        <BusStatus status={bus.status} />
      </div>
    </div>
  );
}