import { toast, Toaster } from "react-hot-toast";
import { FiCopy } from "react-icons/fi";
import Button from "@mui/material/Button";

export default function Gradient(props) {
  const copyText = () => {
    toast.success("Copied!");
    navigator.clipboard.writeText(props.code);
  };

  return (
    <Button>
      <div
        className="m-2 p-4 grainy w-48 h-48 rounded shadow-sm flex flex-col justify-center cursor-pointer hover:shadow-md"
        onClick={copyText}
      >
        <div
          className="p-14 rounded"
          style={{
            background: `${props.code}`,
          }}
        ></div>
        <div className="w-full flex justify-center mt-4">
          <FiCopy size="25" />
        </div>
        <Toaster />
      </div>
    </Button>
  );
}
