import { Bus, BusRoute } from '../types/bus';

export const mockRoutes: BusRoute[] = [
  {
    id: 'route-1',
    name: 'Shoolini Univerity',
    color: '#FF4444',
    stops: [
      {
        id: 'stop-1',
        name: 'Shoolini University Main Gate',
        location: { lat: 30.8574, lng: 77.1639 }
      },
      {
        id: 'stop-2',
        name: 'Solan Bus Stand',
        location: { lat: 30.9084, lng: 77.0999 }
      },
      {
        id: 'stop-3',
        name: 'Mall Road',
        location: { lat: 30.9045, lng: 77.0983 }
      }
    ]
  },
  {
    id: 'route-2',
    name: 'Solan',
    color: '#4444FF',
    stops: [
      {
        id: 'stop-4',
        name: 'New Boys Hostel',
        location: { lat: 30.8580, lng: 77.1645 }
      },
      {
        id: 'stop-5',
        name: 'Academic Block',
        location: { lat: 30.8568, lng: 77.1632 }
      },
      {
        id: 'stop-6',
        name: 'Kotlanala',
        location: { lat: 30.8571, lng: 77.1628 }
      }
    ]
  },
  {
    id: 'route-3',
    name: 'Saproon',
    color: '#44AA44',
    stops: [
      {
        id: 'stop-7',
        name: 'Saproon Market',
        location: { lat: 30.9056, lng: 77.1012 }
      },
      {
        id: 'stop-8',
        name: 'District Court',
        location: { lat: 30.9048, lng: 77.0997 }
      },
      {
        id: 'stop-9',
        name: 'Chambaghat',
        location: { lat: 30.8986, lng: 77.1156 }
      }
    ]
  },
  {
    id: 'route-4',
    name: 'Kandaghat',
    color: '#AA44AA',
    stops: [
      {
        id: 'stop-10',
        name: 'Kandaghat Station',
        location: { lat: 30.9715, lng: 77.1167 }
      },
      {
        id: 'stop-11',
        name: 'Shoghi',
        location: { lat: 30.9847, lng: 77.1489 }
      },
      {
        id: 'stop-12',
        name: 'Waknaghat',
        location: { lat: 30.9277, lng: 77.1235 }
      }
    ]
  }
];

// Mock conductors data for testing
export const mockConductors = [
  {
    busId: 'bus-1',
    password: 'password123',
    routeId: 'route-1'
  },
  {
    busId: 'bus-2',
    password: 'password123',
    routeId: 'route-2'
  },
  {
    busId: 'bus-3',
    password: 'password123',
    routeId: 'route-3'
  },
  {
    busId: 'bus-4',
    password: 'password123',
    routeId: 'route-4'
  },
  {
    busId: 'bus-5',
    password: 'password123',
    routeId: 'route-1'
  }
];

// Using dates close to current time for better relative time display
const now = new Date();
const in5Minutes = new Date(now.getTime() + 5 * 60000);
const in10Minutes = new Date(now.getTime() + 10 * 60000);
const in15Minutes = new Date(now.getTime() + 15 * 60000);
const in20Minutes = new Date(now.getTime() + 20 * 60000);
const in25Minutes = new Date(now.getTime() + 25 * 60000);

export const mockBuses: Bus[] = [
  {
    id: 'bus-1',
    routeId: 'route-1',
    name: 'Vijeshwar', // New name added here
    currentLocation: { lat: 30.8575, lng: 77.1640 },
    status: 'ON_TIME',
    nextStop: 'Solan Bus Stand',
    estimatedArrival: in5Minutes.toISOString()
  },
  {
    id: 'bus-2',
    routeId: 'route-2',
    name: 'Lovely', // New name added here
    currentLocation: { lat: 30.8570, lng: 77.1635 },
    status: 'DELAYED',
    nextStop: 'Academic Block',
    estimatedArrival: in10Minutes.toISOString()
  },
  {
    id: 'bus-3',
    routeId: 'route-3',
    name: 'HRTC', // New name added here
    currentLocation: { lat: 30.9050, lng: 77.1010 },
    status: 'ON_TIME',
    nextStop: 'District Court',
    estimatedArrival: in15Minutes.toISOString()
  },
  {
    id: 'bus-4',
    routeId: 'route-4',
    currentLocation: { lat: 30.9700, lng: 77.1170 },
    status: 'AHEAD',
    nextStop: 'Shoghi',
    estimatedArrival: in20Minutes.toISOString()
  },
  {
    id: 'bus-5',
    routeId: 'route-1',
    currentLocation: { lat: 30.9040, lng: 77.0980 },
    status: 'DELAYED',
    nextStop: 'Shoolini University Main Gate',
    estimatedArrival: in25Minutes.toISOString()
  }
];
