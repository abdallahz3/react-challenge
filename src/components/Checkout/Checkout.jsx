import { useAtom } from "jotai";
import {
  isNextDisabledAtom,
  nextLabelAtom,
  nextStepAtom,
  numberOfBagsAtom,
  stepAtom,
  totalPriceAtom,
} from "./atoms";
import NumberOfBagsForm from "./NumberOfBagsForm";
import Modal, { showModalAtom } from "../Modal";
import { placeBooking } from "../../apis/book";
import Step from "./Step";

export default function Checkout() {
  const [numberOfBags] = useAtom(numberOfBagsAtom);
  const [totalPrice] = useAtom(totalPriceAtom);
  const [step, setStep] = useAtom(stepAtom);
  const [isNextDisabled] = useAtom(isNextDisabledAtom);
  const [nextLabel] = useAtom(nextLabelAtom);
  const [nextStep] = useAtom(nextStepAtom);
  const [showModal, setShowModal] = useAtom(showModalAtom);


  if (step == "done") {
    return (
      <div className="w-full h-full flex justify-center items-center text-3xl">
        Booking placed!
      </div>
    );
  }

  return (
    <div
      className="w-full h-full grid"
      style={{ gridTemplateRows: "min-content 1fr min-content" }}
    >
      <div className="p-5">
        <div className="text-sm">Booking storage at:</div>
        <div className="text-lg font-bold">Cody's Cookie Store</div>
        <NumberOfBagsForm />
      </div>
      <div className="border-t border-t-gray-200">
        <Step />
      </div>
      <div className="border-t border-t-black flex justify-between items-center px-5 py-5">
        <div>
          <div>
            {numberOfBags} {numberOfBags <= 1 ? `bag` : `bags`}
          </div>
          <div>${totalPrice}</div>
        </div>
        <button
          className={`bg-blue-200 px-5 py-1 rounded ${
            isNextDisabled
              ? `text-white`
              : `hover:bg-blue-400 hover:text-white cursor-pointer`
          }`}
          disabled={isNextDisabled}
          onClick={() => {
            if (step == "payment-infromation") {
              setShowModal(true);
              placeBooking().then(() => {
                setShowModal(false);
                setStep(nextStep);
              });
              return;
            }
            setStep(nextStep);
          }}
        >
          {nextLabel}
        </button>
      </div>
      {showModal && (
        <Modal>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-white">
            Placing Booking...
          </div>
        </Modal>
      )}
    </div>
  );
}
