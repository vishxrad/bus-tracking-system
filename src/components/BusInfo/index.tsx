import { Bus, BusRoute } from '../../types/bus';
import BusCard from './BusCard';

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
        {filteredBuses.map(bus => (
          <BusCard
            key={bus.id}
            bus={bus}
            route={routes.find(r => r.id === bus.routeId)}
          />
        ))}
      </div>
    </div>
  );
}