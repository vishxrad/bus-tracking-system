import { BusRoute } from '../types/bus';

interface RouteSelectorProps {
  routes: BusRoute[];
  selectedRoute?: string;
  onRouteSelect: (routeId: string) => void;
}

export default function RouteSelector({ routes, selectedRoute, onRouteSelect }: RouteSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <button
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
          ${!selectedRoute 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        onClick={() => onRouteSelect('')}
      >
        All Routes
      </button>
      {routes.map(route => (
        <button
          key={route.id}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${selectedRoute === route.id
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => onRouteSelect(route.id)}
        >
          {route.name}
        </button>
      ))}
    </div>
  );
}