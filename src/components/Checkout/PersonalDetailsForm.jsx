import { useAtom } from "jotai";
import { emailAtom, nameAtom } from "./atoms";

export default function () {
  const [name, setName] = useAtom(nameAtom);
  const [email, setEmail] = useAtom(emailAtom);

  return (
    <div className="max-w-[350px] space-y-3 p-5">
      <h1 className="text-xl">Personal Details:</h1>
      <div>
        <div className="text-gray-500 text-sm">Name</div>
        <input
          className="w-full rounded border-[1px] border-gray-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <div className="text-gray-500 text-sm">Email</div>
        <input
          className="w-full rounded border-[1px] border-gray-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </div>
  );
}
