import React, { ReactNode } from "react";
import { RxCross1 } from "react-icons/rx";

type ModalType = {
  title?: string;
  content?: string;
  IsOpen: boolean;
  setIsOpen: (_: boolean) => void;
  actions:ReactNode;
};

const Modal = ({ title, content, IsOpen, setIsOpen,actions }: ModalType) => {
  return (
    <div className={`${IsOpen ? "block" : "hidden"}`}>
      <div className="h-svh w-full bg-gray-400 bg-opacity-50 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="bg-white w-1/3 min-h-10 py-10 px-12 rounded-3xl">
          <div className="flex justify-between">
            <h2 className="text-1xl font-semibold text-slate-700">{title}</h2>
            <button>
              <RxCross1 onClick={() => setIsOpen(false)} />
            </button>
          </div>
          <p className="py-5">{content}</p>
          <div className="flex justify-between">{actions}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
