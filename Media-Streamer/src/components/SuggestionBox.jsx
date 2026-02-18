import React from 'react';

export default function SuggestionBox({ suggestions, onSelect }) {
  if (!suggestions || suggestions.length === 0) return null;

  return (
    <ul className="absolute left-0 right-0 top-10 bg-white border border-slate-200 rounded shadow-lg z-10 max-h-60 overflow-auto">
      {suggestions.map((suggestion, idx) => (
        <li
          key={idx}
          className="px-4 py-2 cursor-pointer hover:bg-slate-100 text-sm"
          onMouseDown={() => onSelect(suggestion)}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
}
