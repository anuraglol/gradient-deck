import { RiTwitterLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { Tooltip } from '@mui/material'

export default function Header() {
  return (
    <div className="w-screen header p-4 flex flex-row justify-between items-center h-[6em]">
      {/* logo/name */}

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <p className="w-36 py-2 grid place-items-center bg-[#ffbf24] rounded font-delius font-semibold text-xl cursor-pointer logo md:text-2xl md:p-3 md:w-44">
          gradient deck
        </p>
      </motion.div>

      {/* twitter link */}
      <Tooltip title="Connect with me on Twitter">
     
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <p className="mr-1 p-2 md:w-34  bg-[#fafafa] cursor-pointer shadow rounded hover:drop-shadow-xl md:w-34 md:p-3">
          <a
            href="https://twitter.com/kr_anurag_"
            className="flex flex-row items-center justify-center"
          >
            <RiTwitterLine size="30" />
            <span className="font-poppins font-medium text-xl hidden sm:inline">Anurag</span>
          </a>
        </p>
      </motion.div>
       </Tooltip>
    </div>
  );
}
