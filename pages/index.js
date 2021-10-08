import { Meta, Gradients, Header } from "../components";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="h-screen w-screen main">
      <Toaster position="bottom-left"/>
      <Meta />
      <Header />
      <Gradients />
    </div>
  );
}
