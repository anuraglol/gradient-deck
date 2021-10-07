import { FiCopy } from "react-icons/fi";
import { useState } from "react";
import { Button } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { BsBookmark } from "react-icons/bs";
import { FiDownloadCloud } from "react-icons/fi";

export default function Gradient(props) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const copyText = () => {
    toast.success("Copied to Clipbaord!!");
    navigator.clipboard.writeText(props.code);
  };

  const bookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const download = () => {};

  return (
    <div className="grid justify-center">
      <div>
        <Button variant="text" onClick={copyText}>
          <div className=" m-2 p-5 grainy w-52 h-52 rounded shadow-sm flex flex-col justify-center cursor-pointer hover:shadow-md">
            <div
              className="gradient p-16 rounded"
              style={{
                background: props.code,
              }}
            ></div>
          </div>
        </Button>
      </div>
      <div className="grid grid-cols-2">
        <Button>
          <FiCopy size="25" className="text-[#020202]" onClick={copyText} />
        </Button>
        <Button>
          <FiDownloadCloud
            size="25"
            className="text-[#020202]"
            onClick={download}
          />
        </Button>
        {/* <Button>
          <BsBookmark
            size="25"
            className={isBookmarked ? "text-red-500" : "text-[#020202]"}
            onClick={bookmark}
          />
        </Button> */}
      </div>
    </div>
  );
}
