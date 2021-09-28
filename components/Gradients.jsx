import Gradient from "./Gradient";
import data from "../data.json";
import { useState } from "react";

export default function Gradients() {
  return (
    <div>
      {data.colors.map((d) => (
        <Gradient code={d} key={d} />
      ))}
    </div>
  );
}
