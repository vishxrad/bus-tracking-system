import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bus as BusIcon } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <BusIcon className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-900">Bus Tracker</h1>
          </Link>
          {!isAdmin ? (
            <Link
              to="/admin"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Conductor Login
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
}