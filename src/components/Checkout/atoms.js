import { atom, useAtom } from "jotai";
import {
  validateName,
  validateEmail,
  validateCreditCard,
} from "../../utils/validators";

export const stepAtom = atom("initial"); // personal-details // payment-infromation // done

export const nextStepAtom = atom((get, set) => {
  const step = get(stepAtom);

  switch (step) {
    case "initial":
      return "personal-details";
    case "personal-details":
      return "payment-infromation";
    case "payment-infromation":
      return "done";
    case "done":
      return "done";
  }
});

export const nextLabelAtom = atom((get) => {
  const step = get(stepAtom);

  switch (step) {
    case "initial":
      return "Next";
    case "personal-details":
      return "Book";
    case "payment-infromation":
      return "Book";
    default:
      return "Next";
  }
});

export const numberOfBagsAtom = atom(0);
export const totalPriceAtom = atom((get) => {
  return (get(numberOfBagsAtom) * 5.9).toFixed(2);
});

export const nameAtom = atom("");
export const emailAtom = atom("");
export const creditCardAtom = atom("");

export const isNextDisabledAtom = atom((get) => {
  const step = get(stepAtom);
  const numberOfBags = get(numberOfBagsAtom);
  const name = get(nameAtom);
  const email = get(emailAtom);
  const creditCard = get(creditCardAtom);

  switch (step) {
    case "initial":
      return numberOfBags == 0;
    case "personal-details":
      return numberOfBags == 0 || !validateName(name) || !validateEmail(email);
    case "payment-infromation":
      return (
        numberOfBags == 0 ||
        !validateName(name) ||
        !validateEmail(email) ||
        !validateCreditCard(creditCard)
      );
    case "done":
      return false;
  }
});
