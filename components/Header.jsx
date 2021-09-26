import { RiTwitterLine } from "react-icons/ri";
import Auth from "./Auth";

export default function Header() {
  return (
    <div className="w-screen header p-6 flex flex-row justify-between items-center h-[6em]">
      <p className="p-3 bg-[#ffbf24] rounded font-delius font-semibold text-2xl cursor-pointer">
        gradient deck
      </p>
      <p className="p-4 bg-[#fafafa] flex flex-row items-center cursor-pointer shadow rounded">
        <RiTwitterLine size="35" />
        <span className="font-poppins font-medium text-xl">Anurag</span>
      </p>
      <Auth />
    </div>
  );
}
