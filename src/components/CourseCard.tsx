import { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-indigo-100 transition duration-150">
      <div>
        <h4 className="font-bold text-gray-800 text-base">{course.title}</h4>
        <div className="flex items-center gap-3 mt-1.5">
          <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">
            {course.duration}
          </span>
          <span className="text-xs font-semibold text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-md">
            {course.difficulty}
          </span>
        </div>
      </div>
      <span
        className={`text-xs font-black px-3 py-1.5 rounded-full text-center max-w-[120px] ${course.status === "Completed" ? "bg-emerald-50 text-emerald-600" : course.status === "In Progress" ? "bg-amber-50 text-amber-600" : "bg-gray-100 text-gray-500"}`}
      >
        {course.status}
      </span>
    </div>
  );
}
