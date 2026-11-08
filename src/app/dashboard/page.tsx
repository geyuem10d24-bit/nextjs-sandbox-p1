"use client";

import React, { useState } from "react";

export default function DashboardPage() {
  // 1. Declare a reactive numeric state memory block using TS type parameters
  const [xp, setXp] = useState<number>(0);

  // 2. Define an event execution function using arrow syntax
  const handleEarnXP = (): void => {
    setXp(xp + 10);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-md border border-gray-100 text-center">
        <div className="mx-auto h-20 w-20 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-black mb-4">
          JS
        </div>
        <h2 className="text-xl font-bold text-gray-800">Alex Smith </h2>
        <p className="text-xs font-semibold text-gray-400 mb-6">
          Bootcamp Student{" "}
        </p>

        <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl mb-6">
          <div>
            <p className="text-lg font-extrabold text-gray-800">12 </p>
            <p className="text-xs text-gray-400 font-medium">Hours Learned </p>
          </div>

          {/* 3. Drop the active state variable inside brackets to print live numbers */}
          <div className="border-l border-gray-200">
            <p className="text-lg font-extrabold text-indigo-600">{xp} </p>
            <p className="text-xs text-gray-400 font-medium">XP Points </p>
          </div>
        </div>

        {/* 4. Connect the browser execution command to the function logic */}
        <button
          onClick={handleEarnXP}
          className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 active:scale-95 transition duration-150"
        >
          Study for 1 Hour (+10 XP)
        </button>
      </div>
    </main>
  );
}
