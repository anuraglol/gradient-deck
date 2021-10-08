import { FiCopy } from "react-icons/fi";
import { Button } from "@mui/material";
import toast from "react-hot-toast";

export default function Gradient(props) {
  const copyText = () => {
    toast.success("Copied to Clipbaord!!");
    navigator.clipboard.writeText(props.code);
  };

  return (
    <div className="grid justify-center">
      <div>
        <Button variant="text" onClick={copyText}>
          <div className="m-2 p-5 grainy w-52 h-52 rounded shadow-sm flex flex-col justify-center cursor-pointer hover:shadow-md"> 
              <div
              className="gradient p-16 rounded"
              style={{
                background: props.code,
              }}
            ></div>
          </div>
        </Button>
      </div>
      <div className="grid grid-cols-1">
        <Button>
          <FiCopy size="25" className="text-[#020202]" onClick={copyText} />
        </Button>
      </div>
    </div>
  );
}
