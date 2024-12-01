import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { mockRoutes } from '../data/mockData';
import { Bus, BusStatus } from '../types/bus';
import { createMapIcons } from '../utils/mapUtils';

function LocationPicker({ onLocationSelect }: { onLocationSelect: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(e) {
      onLocationSelect(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [conductor, setConductor] = useState<any>(null);
  const [currentLocation, setCurrentLocation] = useState<[number, number]>([30.8574, 77.1639]);
  const [nextStop, setNextStop] = useState('');
  const [status, setStatus] = useState<BusStatus>('ON_TIME');
  const { busIcon } = createMapIcons();

  useEffect(() => {
    const storedConductor = localStorage.getItem('conductor');
    if (!storedConductor) {
      navigate('/admin');
      return;
    }
    setConductor(JSON.parse(storedConductor));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('conductor');
    navigate('/admin');
  };

  const handleUpdateLocation = () => {
    // In a real application, this would make an API call to update the location
    console.log('Updating location:', {
      busId: conductor?.busId,
      location: currentLocation,
      nextStop,
      status,
    });
    alert('Location updated successfully!');
  };

  if (!conductor) return null;

  const route = mockRoutes.find(r => r.id === conductor.routeId);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Bus {conductor.busId} Dashboard</h2>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Update Location</h3>
            <div className="h-[500px] rounded-lg overflow-hidden">
              <MapContainer
                center={currentLocation}
                zoom={15}
                className="w-full h-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationPicker
                  onLocationSelect={(lat, lng) => setCurrentLocation([lat, lng])}
                />
                <Marker position={currentLocation} icon={busIcon} />
              </MapContainer>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Bus Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Route</label>
                <p className="mt-1 text-lg">{route?.name}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Next Stop</label>
                <select
                  value={nextStop}
                  onChange={(e) => setNextStop(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select next stop</option>
                  {route?.stops.map((stop) => (
                    <option key={stop.id} value={stop.name}>
                      {stop.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as BusStatus)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="ON_TIME">On Time</option>
                  <option value="DELAYED">Delayed</option>
                  <option value="AHEAD">Ahead of Schedule</option>
                </select>
              </div>

              <button
                onClick={handleUpdateLocation}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Update Location
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}