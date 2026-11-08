import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2 font-black text-xl text-indigo-600 tracking-tight">
        🚀 <span>DevTracker </span>
      </div>
      <button className="text-sm font-semibold text-gray-400 hover:text-red-500 transition duration-200">
        Sign Out →
      </button>
    </header>
  );
}
