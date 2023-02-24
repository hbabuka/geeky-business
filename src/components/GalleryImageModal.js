import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export const GalleryImageModal = ({
  isOpen,
  toggleIsopen,
  children,
  src,
  alt,
}) => {
  return (
    <div onClick={toggleIsopen}>
      {children}
      {isOpen ? (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          {/* Background backdroop */}
          <div className="fixed inset-0 w-full h-full bg-secondary-900 opacity-90 transition-opacity"></div>

          <div className="flex items-center min-h-screen">
            <div className="relative mx-auto my-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
              <button
                className="btn-secondary-outlined icon-btn absolute top-8 right-8 bg-white"
                onClick={toggleIsopen}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              <img src={src} alt={alt} className="max-w-5xl" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
