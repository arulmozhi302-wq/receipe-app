import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full bg-gradient-to-r from-teal-400 to-yellow-200 text-black p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold text-black">
        🍽 Recipe App
      </Link>
    </nav>
  );
};

export default Navbar;
