import React from 'react'

export const Header = () => {

  return (
    <div className="bg-white rounded-xl shadow-sm  p-7 flex justify-between items-center my-5">
      <div>
        <h2 className="text-lg font-bold text-gray-800">
          Welcome back, Student!
        </h2>

        <p className="text-sm text-gray-500">
          Here's what's happening with your courses today.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span>🔔</span>
        <div className="w-9 h-9 rounded-full bg-pink-400 flex items-center justify-center text-white">
          S
        </div>
      </div>
    </div>
  );
}
