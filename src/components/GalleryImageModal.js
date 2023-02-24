import React, { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export const GalleryImageModal = ({ children, src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    if (isOpen === false) {
      document.body.style.removeProperty("overflow");
    }
  }, [isOpen]);

  return (
    <div onClick={toggleIsOpen}>
      {children}
      {isOpen ? (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          {/* Background backdroop */}
          <div className="fixed inset-0 w-full h-full bg-secondary-900 opacity-90 transition-opacity"></div>

          <div className="flex items-center min-h-screen">
            <div className="relative mx-auto my-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
              <button
                className="btn-secondary-outlined icon-btn absolute top-8 right-8 bg-white"
                onClick={toggleIsOpen}
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
