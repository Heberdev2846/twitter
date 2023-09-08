import Navbar from "../app/components/Navbar";
import Navbarder from "./components/Navbarder";
import Centro from "./components/Centro";

export default function Home() {
  return (
    <div className="flex justify-between w-1/3">
      <Navbar />
      <Centro />
      <Navbarder />
    </div>
  );
}
