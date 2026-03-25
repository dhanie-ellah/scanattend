"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setModal } from "@/app/redux/modalSlice";
import { RootState } from "@/app/redux/store";

export default function CreateEvent({}) {
  const dispatch = useDispatch();
  const openModal = useSelector((state: RootState) => state.modal.type);

  return (
    <div>
      {openModal === "createEvent" && (
        <div className=" fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-(--on-surface)/20 backdrop-blur-md z-50">
          <div>
            <div className="relative bg-(--surface) rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
              {/* <!-- Modal Header --> */}
              <div className="flex items-center justify-between px-8 py-6 bg-(--surface-container-lowest)">
                <div>
                  <h2 className="text-2xl font-extrabold font-headline tracking-tight text-(--on-surface)">
                    Create Event
                  </h2>
                  <p className="text-xs text-(--on-surface-variant) font-medium mt-1">
                    Configure your event parameters
                  </p>
                </div>
                <button className="h-6 w-6 flex items-center justify-center p-4 rounded-full hover:bg-(--surface-container) transition-colors group">
                  <span
                    className="material-symbols-outlined text-(--on-surface-variant) group-hover:text-(--on-surface)"
                    data-icon="close"
                    onClick={() => dispatch(setModal(null))}
                  >
                    close
                  </span>
                </button>
              </div>
              {/* <!-- Modal Body / Form --> */}
              <div className="px-8 py-8 space-y-6 max-h-179 overflow-y-auto">
                {/* <!-- Event Title Input --> */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-(--on-surface-variant) ml-1">
                    Event title
                  </label>
                  <input
                    className="w-full bg-(--surface-container) border-none rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-(--primary)/20 focus:bg-(--surface-container-lowest) transition-all placeholder:text-(--outline)/50"
                    placeholder="e.g. Annual General Meeting"
                    type="text"
                  />
                </div>
                {/* <!-- Date & Time Grid --> */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-(--on-surface-variant) ml-1">
                      Event date
                    </label>
                    <div className="relative">
                      <input
                        className="w-full bg-(--surface-container) border-none rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-(--primary)/20 focus:bg-(--surface-container-lowest) transition-all"
                        type="date"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-(--on-surface-variant) ml-1">
                      Expected arrival
                    </label>
                    <div className="relative">
                      <input
                        className="w-full bg-(--surface-container) border-none rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-(--primary)/20 focus:bg-(--surface-container-lowest) transition-all"
                        type="time"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Modal Footer --> */}
              <div className="px-8 py-6 bg-(--surface-container-low) flex items-center justify-end space-x-4">
                <button
                  className="px-6 py-3 text-sm font-bold text-(--on-surface-variant) hover:text-(--on-surface) transition-colors"
                  onClick={() => dispatch(setModal(null))}
                >
                  Cancel
                </button>
                <button className="px-8 py-3 rounded-full bg-(--primary) text-(--on-primary) text-sm font-bold shadow-xl shadow-(--primary)/30 active:scale-95 transition-transform flex items-center space-x-2" onClick={()=> dispatch(setModal("qrPreview"))}>
                  <span>Generate Event</span>
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="bolt"
                  >
                    bolt
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
