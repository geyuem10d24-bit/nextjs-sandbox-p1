"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import { Course } from "@/types/course"; // Import central type
import CourseCard from "@/components/CourseCard";
export default function DashboardPage() {
  const [xp, setXp] = useState<number>(0);
  const [hours, setHours] = useState<number>(12);
  // Initialize state with a strictly typed array of Course objects
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "1",
      title: "Lesson 1: Environment Setup",
      difficulty: "Beginner",
      duration: "2 Hours",
      status: "Completed",
    },
    {
      id: "2",
      title: "Lesson 2: Routing & Basic State",
      difficulty: "Beginner",
      duration: "3 Hours",
      status: "Completed",
    },
    {
      id: "3",
      title: "Lesson 3: Component Architecture",
      difficulty: "Beginner",
      duration: "3 Hours",
      status: "In Progress",
    },
    {
      id: "4",
      title: "Lesson 4: Dynamic List Rendering",
      difficulty: "Intermediate",
      duration: "4 Hours",
      status: "Not Started",
    },
  ]);
  const handleStudySprint = (): void => {
    setXp(xp + 15);
    setHours(hours + 1);
  };

  // Remainder of component inside next step...
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl w-full mx-auto p-6 md:p-8">
        {/* Top Analytical StatCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <StatCard
            title="Hours Invested"
            value={hours}
            emoji="⏱️"
            themeColor="bg-blue-50"
          />
          <StatCard
            title="Experience Points (XP)"
            value={xp}
            emoji="🏆"
            themeColor="bg-amber-50"
          />
        </div>
        {/* NEW: Bootcamp Curriculum List Block */}
        <div className="mb-8">
          <h3 className="text-xl font-black text-gray-800 tracking-tight mb-4">
            Your Training Curriculum ({courses.length} Modules)
          </h3>
          <div className="space-y-3">
            {/* Loop begins here */}
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
        {/* Bottom Action Sprint Control Panel */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
          <div className="text-3xl mb-2 animate-bounce">⚡ </div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">
            Ready for your next code sprint?{" "}
          </h3>
          <p className="text-sm text-gray-400 mb-4 max-w-xs mx-auto">
            Simulate completing a 1-hour coding sprint to increase your training
            metrics instantly.
          </p>
          <button
            onClick={handleStudySprint}
            className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition active:scale-95 duration-150"
          >
            Sprint Code 1 Hour
          </button>
        </div>
      </main>
    </div>
  );
}
