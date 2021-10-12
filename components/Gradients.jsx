import Gradient from "./Gradient";
import data from "../data.json";

export default function Gradients() {
    
  return (
    <div className="mb-4 w-screen mt-14 overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.colors.map((d) => (
        <Gradient code={d} key={d} />
      ))}
    </div>
  );
}
