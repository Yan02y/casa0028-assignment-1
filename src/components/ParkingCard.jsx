import React from 'react';

export default function ParkingCard({ feature }) {

  if (!feature) return null;

  const properties = feature.properties;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
      
      <div class="inline-flex items-center gap-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-5 h-5 text-blue-600"
        >
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M9 16V8h4a2 2 0 010 4H9" />
        </svg>

        <span className="text-xs font-semibold uppercase tracking-widest">
          Bike Parking
        </span>
      </div>

      <h3 class="mt-1 text-xl font-semibold">
        {properties.name || "Unknown Location"}
      </h3>

      <div className="mt-2 space-y-2 border-t border-gray-100 pt-2">
        
        <p class="mt-2 line-clamp-2 text-pretty">
          <span className="font-semibold text-gray-800">City:</span>
          {properties.address_city} 
        </p>
      </div>

      <div className="mt-2 space-y-2 border-t border-gray-100 pt-2">
        
        <p class="mt-2 line-clamp-2 text-pretty">
          <span className="font-semibold text-gray-800">Capacity:</span>
          <span className="bg-blue-50 px-3 py-1 rounded-lg text-blue-600 font-semibold">
            {properties.capacity} 
          </span>
        </p>
      </div>

      <div className="mt-2 space-y-2 border-t border-gray-100 pt-2">
        
        <p class="mt-2 line-clamp-2 text-pretty">
          <span className="font-semibold text-gray-800">Parking Facility Type:</span>
          {(properties.properties_parkingFacilityType || "").replace(/_/g, ' ')}
        </p>

      </div>
    </div>
    
  );
}