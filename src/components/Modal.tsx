
"use client";

import CloseSVG from "@/icons/CloseSVG";

interface ModalProps {
  setIsOpen: (isOpen: boolean) => void;
  pdfUrl: string;
}

const Modal: React.FC<ModalProps> = ({ setIsOpen, pdfUrl }) => {
  return (
    <>
      <div
        className="w-full h-full fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-[200]"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="mx-auto lg:w-[80vw] w-full h-full lg:h-[90vh] bg-white p-5 flex flex-col gap-3"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full flex justify-between">
            <h5 className="text-xl font-semibold">Nuestros productos</h5>
            <button className="bg-transparent border-none" onClick={() => setIsOpen(false)}>
              <CloseSVG className="w-6" />
            </button>
          </div>
          <div className="h-full w-full">
            <iframe src={pdfUrl + "#toolbar=0"} className="w-full h-full" title="PDF Products" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
