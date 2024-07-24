import React, { ReactNode } from "react";
type ModalType = {
  title?: string;
  content?: string;
  actions?: ReactNode;
};
export default function Modal({ title, actions }: ModalType) {
  return (
    <div className="h-svh w-full bg-slate-500 opacity-80 fixed flex items-center justify-center top-0 left-0 bottom-0 right-0">
      <div className="bg-white w-1/3 min-h-10 py-10 px-10 rounded-3xl">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold text-slate-700">{title}</h2>
          <button></button>
          <p py-5>{actions}</p>
          <div className="flex justify-between"></div>
        </div>
      </div>
    </div>
  );
}
