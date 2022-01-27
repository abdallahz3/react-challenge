import { useAtom } from "jotai";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { creditCardAtom } from "./atoms";
import PersonalDetailsForm from "./PersonalDetailsForm";

export default function () {
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);
  const [creditCard, setCreditCard] = useAtom(creditCardAtom);

  return (
    <div>
      {showPersonalDetails ? (
        <PersonalDetailsForm />
      ) : (
        <div className="flex justify-between mx-5 my-10 p-7 bg-green-600 rounded">
          <div>Personal Details:</div>
          <button
            className={`cursor-pointer p-3 hover:bg-green-900 hover:text-white rounded`}
            onClick={() => {
              setShowPersonalDetails(true);
            }}
          >
            Change?
          </button>
        </div>
      )}
      <div className="space-y-3 border-t border-t-gray-200 p-5">
        <h1 className="text-xl">Payment Information</h1>

        <div>
          <div className="text-gray-500 text-sm">Card Details</div>
          <input
            className="w-full rounded border-[1px] border-gray-400"
            value={creditCard}
            onChange={(e) => setCreditCard(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
