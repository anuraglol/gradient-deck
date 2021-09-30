import { toast, Toaster } from "react-hot-toast";
import { FiCopy } from "react-icons/fi";
import Button from "@mui/material/Button";

export default function Gradient(props) {
  const copyText = () => {
    toast.success("Copied!");
    navigator.clipboard.writeText(props.code);
  };

  return (
    <>
      <Button variant="text" onClick={copyText}>
        <div className=" m-2 p-5 grainy w-52 h-52 rounded shadow-sm flex flex-col justify-center cursor-pointer hover:shadow-md">
          <div
            className="p-16 rounded"
            style={{
              background: props.code,
            }}
          ></div>
        </div>
        {/* <Toaster /> */}
      </Button>
    </>
  );
}
