import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

export const PreviewModal = ({ setOpenModal, title, source }) => {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      {/* Background backdroop */}
      <div
        className="fixed inset-0 w-full h-full bg-secondary-900 opacity-75 transition-opacity"
        onClick={() => setOpenModal(false)}
      ></div>

      {/* Modal */}
      <div className="flex items-center min-h-screen">
        <div className="relative p-8 mx-auto bg-white rounded-3xl shadow-2xl">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 justify-between">
              <h3>{title}</h3>
              <button
                className="btn-secondary-outlined icon-btn"
                onClick={() => setOpenModal(false)}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="">
              <video width="854" height="480" controls>
                <source src={source} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
