import { FiCopy } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { Button } from "@mui/material";
import toast from "react-hot-toast";

export default function Gradient(props) {
  const [isLiked, setIsLiked] = useState(false);

  const copyText = () => {
    // toast.success("Copied to Clipbaord!!");
    navigator.clipboard.writeText(props.code);
  };

  const like = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="grid justify-center">
        <div>
          <Button variant="text" onClick={copyText}>
            <div className=" m-2 p-5 grainy w-52 h-52 rounded shadow-sm flex flex-col justify-center cursor-pointer hover:shadow-md">
              <div
                className="p-16 rounded"
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
            <AiOutlineHeart
              size="25"
              className={isLiked ? "text-red-500" : "text-[#020202]"}
              onClick={like}
            />
          </Button>
        </div>
      </div>
    </>
  );
}
