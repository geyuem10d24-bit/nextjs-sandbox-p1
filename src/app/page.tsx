// Use components from the components_try1 folder to build the page layout

// import Image from "next/image";
// import CenterComponent from "./components_try1/CenterComponent";
// import BottomComponent from "./components_try1/BottomComponent";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert h-5 w-[100px]"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <CenterComponent />
//         <BottomComponent />
//       </main>
//     </div>
//   );
// }

// Create interactive dashboard page with a reactive numeric state memory block and an event execution function
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-24">
      <div className="text-center">
        <h1 className="text-4xl font-black text-indigo-600 mb-2 tracking-tight">
          Welcome to DevTracker
        </h1>

        <p className="text-sm text-gray-500 mb-8 font-medium">
          Your single entry point for student tracking.
        </p>

        {/* Client-Side Link Button */}
        <Link
          href="/dashboard"
          className="rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-gray-800 transition active:scale-95 duration-150"
        >
          Enter Dashboard →
        </Link>
      </div>
    </main>
  );
}
