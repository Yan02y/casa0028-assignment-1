import React from "react";

export default function CitySearch({ cities, searchTerm, setSearchTerm}) {
    return (
        <label className="block">

            <span className="text-sm font-semibold text-gray-700">
                City
            </span>

            <div className="relative mt-1">

                <input 
                    type="text" 
                    list="CityList" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Please select" 
                    className="mt-0.5 w-full border-2 border-black shadow-[4px_4px_0_0] focus:ring-2 focus:ring-yellow-300 sm:text-sm [&amp;::-webkit-calendar-picker-indicator]:opacity-0">
                </input>

                <span className="absolute inset-y-0 right-0 grid w-8 place-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                     <path fillrule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" cliprule="evenodd"></path>
                    </svg>
                </span>
            </div>

            <datalist id="CityList">
                {cities.map((city, index) => (
                    <option key={index} value={city} />
                ))}
            </datalist>
        </label>
    );

}