import { ReactElement, ReactNode, useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  children: ReactNode;
  src: string;
  alt: string;
  setOpenModal: (arg: boolean) => void;
}

export const GalleryImageModal = ({
  children,
  src,
  alt,
  setOpenModal,
}: Props): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
    setOpenModal(!isOpen);
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
          <button
            className="btn-secondary-outlined icon-btn absolute top-5 right-5 lg:top-8 lg:right-8 bg-white"
            onClick={toggleIsOpen}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {/* Modal content */}
          <div className="flex items-center min-h-screen mx-5 md:mx-0">
            <div className="relative mx-auto my-auto bg-white rounded-none lg:rounded-3xl shadow-2xl overflow-auto lg:overflow-hidden">
              <img
                src={src}
                alt={alt}
                className="max-w-3xl md:max-w-full lg:max-w-5xl border-2 border-white md:border-none"
              />
            </div>
          </div>

          {/* Scroll message shown only on smaller devices */}
          <p className="caption md:hidden absolute text-white bottom-10 mx-auto w-full text-center">
            ← Scroll horizontally inside to view the full the image →
          </p>
        </div>
      ) : null}
    </div>
  );
};
