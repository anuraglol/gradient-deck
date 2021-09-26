import Gradient from "./Gradient";
import data from "../data.json";
import { useState } from "react";

export default function Gradients() {
  const [colors, setColors] = useState([]);

  const fetchData = async () => {
    console.log(data);
    data.gradients.map((d) => console.log(d));

    // setColors(data.gradients.map()
    // console.log(colors);
  };

  fetchData();
  return (
    <div>
      <Gradient color1="#fafafa" color2="#fff" />
    </div>
  );
}
