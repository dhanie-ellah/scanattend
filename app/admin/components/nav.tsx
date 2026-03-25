import { Section } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-(--surface-bright)/80 backdrop-blur-md border-b border-(--outline-variant)/10 h-16 px-4 gap-5 md:px-8 flex justify-between items-center">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-(--outline)">
            search
          </span>
          <input
            className="w-full bg-(--surface-container) border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-(--primary)/30 transition-all text-(--outline)"
            placeholder="Search events or attendees..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-1 md:gap-6">
        <div className="flex items-center gap-2">
          <button className="w-5 md:w-10 h-5 md:h-10 flex items-center justify-center text-(--on-surface) hover:bg-(--surface-container-high) rounded-full transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0.5 md:top-2 right-0.5 md:right-2 w-2 h-2 bg-(--error) rounded-full"></span>
          </button>
          <button className="w-5 md:w-10 h-5 md:h-10 flex items-center justify-center text-(--on-surface) hover:bg-(--surface-container-high) rounded-full transition-colors relative">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <button className="w-5 md:w-10 h-5 md:h-10 flex items-center justify-center text-(--on-surface) hover:bg-(--surface-container-high) rounded-full transition-colors">
            <span className="material-symbols-outlined">help</span>
          </button>
        </div>
        <div className="h-8 w-px bg-(--outline-variant)/20"></div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold headline-font leading-tight text-black">
              Admin User
            </p>
            <p className="text-[10px] text-(--on-surface-variant) font-medium">
              Super Admin
            </p>
          </div>
          <img
            className="w-10 h-10 rounded-full object-cover border-2 border-(--primary-container) shadow-sm"
            data-alt="Admin User Profile Avatar"
            src="https://placehold.net/avatar-4.svg"
          />
        </div>
      </div>
    </header>
  );
}
