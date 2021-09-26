import { toast, Toaster } from "react-hot-toast";
import { FiCopy } from "react-icons/fi";
import copy from "copy-to-clipboard";
import Button from "@mui/material/Button";

export default function Gradient(props) {
  const copyText = () => {
    toast.success("Copied!");

    let code = `linear-gradient(${props.color1}, ${props.color2})`;
    copy(code);
  };

  return (
    <Button>
      <div
        className="m-2 p-6 grainy w-48 rounded shadow-sm flex flex-col justify-center cursor-pointer hover:shadow-md"
        onClick={copyText}
      >
        <div
          className="p-6 rounded"
          style={{
            background: `linear-gradient(${props.color1}, ${props.color2})`,
          }}
        ></div>
        <div className="w-full flex justify-center mt-4">
          <FiCopy size="30" />
        </div>
        <Toaster />
      </div>
    </Button>
  );
}
