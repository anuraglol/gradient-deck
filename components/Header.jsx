import { RiTwitterLine } from "react-icons/ri";
import Auth from "./Auth";

export default function Header() {
  return (
    <div className="w-screen header p-6 flex flex-row justify-between items-center h-[6em]">
      <p className="w-44 p-3 bg-[#ffbf24] rounded font-delius font-semibold text-2xl cursor-pointer logo">
        gradient deck
      </p>
      {/* <Auth /> */}
      <p className="w-36 p-4 bg-[#fafafa] cursor-pointer shadow rounded hover:drop-shadow-xl">
        <a
          href="https://twitter.com/kr_anurag_"
          className="flex flex-row items-center"
        >
          <RiTwitterLine size="35" />
          <span className="font-poppins font-medium text-xl">Anurag</span>
        </a>
      </p>
    </div>
  );
}
