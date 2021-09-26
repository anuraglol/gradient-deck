export default function Gradient(props) {
  return (
    <div className="text-xl font-poppins p-6 grainy  w-48 rounded shadow-sm m-4 flex flex-col text-center justify-center cursor-pointer hover:shadow-md">
      <div
        className="p-6 rounded"
        style={{
          background: `linear-gradient(${props.color}, ${props.color2})`,
        }}
      ></div>
      <div>{props.text}</div>
    </div>
  );
}
