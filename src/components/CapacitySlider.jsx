import React from "react";

export default function CapacitySlider({minCapacity, setminCapacity,maxCapacity = 2000}) {
    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-700">
                    Minimum Capacity
                </span>

                <span className="text-sm font-bold text-blue-600">
                    {minCapacity}
                </span>
            </div>

            <input
            type="range"
            min="0"
            max={maxCapacity}
            value={minCapacity}
            onChange={(e) => setminCapacity(Number(e.target.value))}
            className="w-full accent-blue-600"
            />

            <div className="flex justify-between text-xs text-gray-400">
                <span>0</span>
                <span>{maxCapacity}</span>
            </div>

        </div>
    );
}