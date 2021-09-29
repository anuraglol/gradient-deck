import { RiTwitterLine } from "react-icons/ri";
import Auth from "./Auth";

export default function Header() {
  return (
    <div className="w-screen header p-6 flex flex-row justify-between items-center h-[6em]">
      <p className="p-3 bg-[#ffbf24] rounded font-delius font-semibold text-2xl cursor-pointer logo">
        gradient deck
      </p>
      <a href="https://twitter.com/kr_anurag_">
        <p className="p-4 bg-[#fafafa] flex flex-row items-center cursor-pointer shadow rounded hover:drop-shadow-xl">
          <RiTwitterLine size="35" />
          <span className="font-poppins font-medium text-xl">Anurag</span>
        </p>
      </a>
      <Auth />
    </div>
  );
}
