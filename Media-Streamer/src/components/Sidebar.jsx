import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Search', path: '/search' },
  { label: 'Upload', path: '/upload' },
  { label: 'Profile', path: '/profile' },
  { label: 'Watch History', path: '/watch-history' },
];

export default function Sidebar() {
  const location = useLocation();
  return (
    <aside className="w-56 h-screen bg-gray-800 text-white p-6 shadow-lg flex flex-col">
      <h1 className="text-lg font-bold mb-8 tracking-wide">Media Streamer</h1>
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-2 rounded transition font-medium text-base ${location.pathname === item.path ? 'bg-gray-700 text-yellow-400' : 'hover:bg-gray-700 hover:text-yellow-300'}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}