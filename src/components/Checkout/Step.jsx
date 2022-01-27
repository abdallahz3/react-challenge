import { useAtom } from "jotai";
import { stepAtom } from "./atoms";
import PersonalDetailsForm from "./PersonalDetailsForm";
import PaymentInformationForm from "./PaymentInformationForm";

export default function Step() {
  const [step] = useAtom(stepAtom);

  switch (step) {
    case "initial":
      return <></>;
    case "personal-details":
      return <PersonalDetailsForm />;
    case "payment-infromation":
      return <PaymentInformationForm />;
    case "done":
      return <>Done</>;
    default:
      return <></>;
  }
}
