import React from 'react';
import CitySearch from "./CitySearch";
import CapacitySlider from './CapacitySlider';

export default function Sidebar({cities, searchTerm, setSearchTerm, minCapacity, setminCapacity, total, filteredCount}) {
  return (
    <div className="w-1/5 border-r border-gray-200 p-5 space-y-6 backdrop-blur-sm"
         style={{ backgroundColor: "rgb(238, 245, 255)"}}
    >

      <h2 className="text-lg font-bold">Filters</h2>

      <div className="text-sm text-gray-600">
        <p>Using this interactive map, you can filter bike parking locations by searching for cities or setting a minimum parking capacity.</p>
        <p>The dots on the map will update in real time and can be clicked to view details. Dragging the map or zooming in/out allows you to explore parking availability across different areas.</p>
      </div>

      <div className="text-sm text-gray-600 border-t pt-3">
        The Publisher of the source data is Swiss Federal Railways (SBB).
      </div>

      <CitySearch
        cities={cities}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CapacitySlider
        minCapacity={minCapacity}
        setminCapacity={setminCapacity}
      />

      <div className="text-sm text-gray-600 border-t pt-4">
        Showing {filteredCount} of {total} location
      </div>
    
    </div>
  )
}


