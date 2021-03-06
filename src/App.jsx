import { useAtom } from "jotai";
import { useState } from "react";
import {showModalAtom} from "./components/Modal"
import Checkout from "./components/Checkout";

function App() {
  const [showModal, setShowModal] = useAtom(showModalAtom);
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <Checkout />
      </div>
      <div
        className={`absolute inset-0 z-10 ${showModal ? `` : `hidden`}`}
        id="modal"
      >
        <div className="absolute inset-0 bg-gray-700 bg-opacity-70 blur-sm"></div>
      </div>
    </div>
  );
}

export default App;
