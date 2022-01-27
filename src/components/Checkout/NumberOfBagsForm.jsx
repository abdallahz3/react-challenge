import { useAtom } from "jotai";
import { numberOfBagsAtom } from "./atoms";

export default function NumberOfBagsForm() {
  const [numberOfBags, setNumberOfBags] = useAtom(numberOfBagsAtom);

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="text-base">Number of bars</div>
      <div className="flex items-center space-x-3 text-center">
        <button
          className={`flex-0 w-[24px] h-[24px] rounded ${
            numberOfBags <= 1
              ? `bg-blue-200 cursor-not-allowed`
              : `bg-blue-400 cursor-pointer`
          }`}
          // disabled={numberOfBags <= 1}
          onClick={() => {
            setNumberOfBags(numberOfBags - 1);
          }}
        >
          -
        </button>
        <div className="w-[48px] rounded">{numberOfBags}</div>
        <button
          className="flex-0 w-[24px] h-[24px] rounded bg-blue-400 cursor-pointer"
          onClick={() => {
            setNumberOfBags(numberOfBags + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
