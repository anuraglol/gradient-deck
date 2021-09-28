import Gradient from "./Gradient";
import data from "../data.json";
import { useState } from "react";

export default function Gradients() {
  return (
    <div>
      {/* <Gradient color1="#fafafa" color2="#fff" /> */}
      {data.colors.map((d) => (
        <Gradient code={d} />
      ))}
    </div>
  );
}
