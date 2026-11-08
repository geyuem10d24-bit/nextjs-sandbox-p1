import React from "react";

// 1. Create a strict type contract for what data this card requires
interface StatCardProps {
  title: string;
  value: number;
  emoji: string;
  themeColor: string; // Tailwind class name background string
}

// 2. Pass the interface into the function arguments and destructure the values
export default function StatCard({
  title,
  value,
  emoji,
  themeColor,
}: StatCardProps) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          {title}
        </p>
        <p className="text-3xl font-black text-gray-800 mt-1">{value}</p>
      </div>
      {/* Dynamic background color rendering based on passed color string props */}
      <div
        className={`h-12 w-12 rounded-xl flex items-center justify-center text-2xl ${themeColor}`}
      >
        {emoji}
      </div>
    </div>
  );
}
