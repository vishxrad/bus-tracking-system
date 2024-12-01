import React, { useState } from 'react';
import Map from '../components/Map';
import RouteSelector from '../components/RouteSelector';
import BusInfo from '../components/BusInfo';
import { mockBuses, mockRoutes } from '../data/mockData';

export default function PublicMap() {
  const [selectedRoute, setSelectedRoute] = useState<string>('');

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <RouteSelector
        routes={mockRoutes}
        selectedRoute={selectedRoute}
        onRouteSelect={setSelectedRoute}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Map
            buses={mockBuses}
            routes={mockRoutes}
            selectedRoute={selectedRoute}
          />
        </div>
        <div>
          <BusInfo
            buses={mockBuses}
            routes={mockRoutes}
            selectedRoute={selectedRoute}
          />
        </div>
      </div>
    </main>
  );
}