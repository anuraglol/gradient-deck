import Gradient from "./Gradient";
import data from "../data.json";

export default function Gradients() {
  return (
    <div className="m-12">
      {data.colors.map((d) => (
        <Gradient code={d} key={d} />
      ))}
    </div>
  );
}
