import { Bus, BusRoute } from '../types/bus';
import { formatDistanceToNow } from 'date-fns';
import { Bus as BusIcon, Clock, MapPin } from 'lucide-react';

interface BusInfoProps {
  buses: Bus[];
  routes: BusRoute[];
  selectedRoute?: string;
}

export default function BusInfo({ buses, routes, selectedRoute }: BusInfoProps) {
  const filteredBuses = selectedRoute
    ? buses.filter(bus => bus.routeId === selectedRoute)
    : buses;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Active Buses</h2>
      <div className="space-y-4">
        {filteredBuses.map(bus => {
          const route = routes.find(r => r.id === bus.routeId);
          return (
            <div
              key={bus.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
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
                    Arriving: {formatDistanceToNow(new Date(bus.estimatedArrival), { addSuffix: true })}
                  </span>
                </div>
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs
                  ${bus.status === 'ON_TIME' ? 'bg-green-100 text-green-800' :
                    bus.status === 'DELAYED' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'}`}>
                  {bus.status}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}