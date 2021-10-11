import { FiCopy } from "react-icons/fi";
import { Button, Tooltip } from "@mui/material";
import toast from "react-hot-toast";
import html2canvas from "html2canvas";
import { AiOutlineCloudDownload } from "react-icons/ai";

export default function Gradient(props) {
  const copyText = () => {
    toast.success("Copied to Clipbaord!!");
    navigator.clipboard.writeText(props.code);
  };

  const download = () => {
    toast.success("Downloaded!!");

    let divToDisplay = document.querySelector(".gradient");
    let link = document.querySelector(".link");

    html2canvas(divToDisplay).then(function (canvas) {
      const divImage = canvas.toDataURL("image/png");

      link.setAttribute("href", divImage);
      link.click();
      console.log(divImage);
    });
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

      <div className="grid grid-cols-2">
        <Tooltip title="Copy CSS Code">
          <Button onClick={copyText}>
            <FiCopy size="25" className="text-[#020202]" />
          </Button>
        </Tooltip>

        <Tooltip title="Download as Image">
          <Button onClick={download}>
            <AiOutlineCloudDownload size="25" className="text-[#020202]" />
          </Button>
        </Tooltip>
        <a
          href=""
          className="hidden link"
          download="gradient"
          target="_blank"
        ></a>
      </div>
    </div>
  );
}
