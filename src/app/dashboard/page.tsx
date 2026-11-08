"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import SprintCard from "@/components/SprintCard";

export default function DashboardPage() {
  const [xp, setXp] = useState<number>(0);
  const [hours, setHours] = useState<number>(12);

  const handleStudySprint = (): void => {
    setXp(xp + 15);
    setHours(hours + 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* 1. Mount the Global Full-Width Shared Top Header */}
      <Header />

      {/* 2. Expand Layout to a full dashboard grid system */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-6 md:p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-black text-gray-800 tracking-tight">
            Student Dashboard{" "}
          </h2>
          <p className="text-sm text-gray-400 font-medium">
            Track your learning analytics in real-time.{" "}
          </p>
        </div>

        {/* 3. Reusing the SAME StatCard component and feeding it completely DIFFERENT properties */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <StatCard
            title="Hours Invested"
            value={hours}
            emoji="⏰"
            themeColor="bg-blue-50"
          />
          <StatCard
            title="Experience Points (XP)"
            value={xp}
            emoji="🏆"
            themeColor="bg-amber-50"
          />
          <StatCard
            title="card3"
            value={xp}
            emoji="😎"
            themeColor="bg-amber-50"
          />
          <StatCard
            title="card4"
            value={xp}
            emoji="😍"
            themeColor="bg-amber-50"
          />
        </div>

        {/* Action Control Panel Box */}
        <SprintCard sprintOnClick={handleStudySprint} />
      </main>
    </div>
  );
}
