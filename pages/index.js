import { Meta, Gradients, Header, Home } from "../components";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="h-screen w-screen main">
      <Toaster position="bottom-left" />
      <Meta />
      <Header />
      <Home />
      <Gradients />
    </div>
  );
}
