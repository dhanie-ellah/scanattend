"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearModal } from "@/app/redux/modalSlice";
import { RootState } from "@/app/redux/store";

export default function QRPreview({}) {
  const dispatch = useDispatch();
  const openModal = useSelector((state: RootState) => state.modal.type);

  return (
    <div>
      {openModal === "qrPreview" && (
        <div className=" fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-(--on-surface)/20 backdrop-blur-md z-50">
          <div className="relative w-full max-w-2xl bg-(--surface-container-lowest) rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,106,110,0.15)] overflow-hidden border border-white animate-in zoom-in duration-300">
            <div className="p-4 md:p-8 flex flex-col items-center text-center space-y-5">
              {/* <!-- Success Indicator & Title --> */}
              <div className=" flex items-center justify-between w-full">
                <h2 className="font-extrabold text-2xl text-left text-(--on-surface tracking-tight)">
                  Event Created Successfully!
                </h2>
                {/* <!-- Close Button --> */}
                <button
                  className="h-8 w-8 flex justify-center items-center p-2 rounded-full hover:bg-(--surface-container-high) transition-colors z-10 text-(--on-surface-variant)"
                  onClick={() => dispatch(clearModal())}
                >
                  <span
                    className="material-symbols-outlined text-xl"
                    data-icon="close"
                  >
                    close
                  </span>
                </button>
              </div>
              {/* <!-- Event Details Brief --> */}
              <div className="bg-(--surface-container-low) rounded-2xl p-4 w-full">
                <h3 className="font-headline font-bold text-xl text-(--primary)">
                  Workers Sunday Attendance
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-(--on-surface-variant)">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="material-symbols-outlined text-(--primary) text-lg"
                      data-icon="calendar_today"
                    >
                      calendar_today
                    </span>
                    <span>October 24, 2024</span>
                  </div>
                  <span className="text-(--outline-variant) hidden sm:inline">
                    •
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="material-symbols-outlined text-(--primary) text-lg"
                      data-icon="location_on"
                    >
                      location_on
                    </span>
                    <span>Main Auditorium</span>
                  </div>
                </div>
              </div>
              {/* <!-- QR Code Section --> */}
              <div className="relative group">
                <div className="absolute inset-0 bg-(--primary)/5 rounded-4xl transform rotate-1"></div>
                <div className="relative bg-white p-6 rounded-3xl shadow-sm border border-(--surface-container-high) w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
                  <svg
                    className="w-full h-full fill-(--on-surface) p-2"
                    viewBox="0 0 100 100"
                  >
                    <path d="M0,0h40v40H0V0z M5,5v30h30V5H5z M10,10h20v20H10V10z"></path>
                    <path d="M60,0h40v40H60V0z M65,5v30h30V5H65z M70,10h20v20H70V10z"></path>
                    <path d="M0,60h40v40H0V60z M5,65v30h30V65H5z M10,70h20v20H10V70z"></path>
                    <rect height="10" width="10" x="50" y="50"></rect>
                    <rect height="10" width="10" x="70" y="50"></rect>
                    <rect height="10" width="10" x="90" y="50"></rect>
                    <rect height="10" width="10" x="50" y="70"></rect>
                    <rect height="10" width="10" x="70" y="70"></rect>
                    <rect height="10" width="10" x="90" y="70"></rect>
                    <rect height="10" width="10" x="50" y="90"></rect>
                    <rect height="10" width="10" x="70" y="90"></rect>
                    <rect height="10" width="10" x="80" y="60"></rect>
                    <rect height="10" width="10" x="60" y="80"></rect>
                    <rect
                      fill="#006a6e"
                      height="5"
                      width="5"
                      x="45"
                      y="45"
                    ></rect>
                  </svg>
                  {/* <!-- Corner Markers --> */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-4 border-l-4 border-(--primary)/40 rounded-tl-lg"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-4 border-r-4 border-(--primary)/40 rounded-tr-lg"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-4 border-l-4 border-(--primary)/40 rounded-bl-lg"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-4 border-r-4 border-(--primary)/40 rounded-br-lg"></div>
                </div>
              </div>
              {/* <!-- Instructions --> */}
              <p className="text-(--on-surface-variant) font-medium text-base max-w-sm">
                Place this QR code at the event entrance for participants to
                scan.
              </p>
              {/* <!-- Actions --> */}
              <div className="flex flex-wrap justify-center gap-3 w-full">
                <button className="bg-(--primary) hover:bg-(--primary-dim) text-(--on-primary) px-6 py-3.5 rounded-full font-bold flex items-center gap-2 transition-all active:scale-95 text-sm shadow-lg shadow-(--primary)/10">
                  <span
                    className="material-symbols-outlined text-lg"
                    data-icon="download"
                  >
                    download
                  </span>
                  Download QR
                </button>
                <button className="bg-(--secondary-container) hover:bg-(--surface-container-high) text-(--on-secondary-container) px-6 py-3.5 rounded-full font-bold flex items-center gap-2 transition-all active:scale-95 text-sm">
                  <span
                    className="material-symbols-outlined text-lg"
                    data-icon="share"
                  >
                    share
                  </span>
                  Share QR
                </button>
                <button className="bg-white border border-(--outline-variant) hover:bg-(--surface-container-low) text-(--on-surface) px-6 py-3.5 rounded-full font-bold flex items-center gap-2 transition-all active:scale-95 text-sm">
                  <span
                    className="material-symbols-outlined text-lg"
                    data-icon="content_copy"
                  >
                    content_copy
                  </span>
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
