interface SprintCardProps {
  sprintOnClick: () => void;
}

export default function SprintCard({ sprintOnClick }: SprintCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
      <div className="text-3xl mb-2 animate-bounce">⚡</div>
      <h3 className="text-lg font-bold text-gray-800 mb-1">
        Ready for your next code sprint?
      </h3>
      <p className="text-sm text-gray-400 mb-4 max-w-xs mx-auto">
        Simulate completing a 1-hour coding sprint to increase your training
        metrics instantly.
      </p>
      <button
        onClick={sprintOnClick}
        className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition active:scale-95 duration-150"
      >
        Sprint Code 1 Hour
      </button>
    </div>
  );
}
