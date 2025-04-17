import { Link } from "react-router";
import Dropdown from "./Dropdown";

function Header() {
  return (
    <nav className="min-w-screen min-h-[5vh] max-h-[5vh] border-solid border-b-1 border-gray-600 flex flex-row items-center justify-between">
      <Link to="/" className="flex flex-row m-5 gap-2 text-2xl items-center font-semibold">
        <img
          className="h-[2vh]"
          src="/logo.png"
          alt="Graph Clipart Transparent - Growth Chart Png @clipartmax.com"
        />
        <div>Plots.io</div>
      </Link>
      <Dropdown/>
    </nav>
  );
}

export default Header;
