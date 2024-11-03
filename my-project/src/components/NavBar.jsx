import logo from "../assets/logo1.png";
// import { navItems } from "../constants";
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">KIIT <span className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">E-Cell</span></span>
          </div>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            
          <Link to="/" className="py-2 px-3 border rounded-md">
              Home
            </Link>
            <Link
              to="/register"
              className="bg-gradient-to-r from-blue-500 to-green-800 py-2 px-3 rounded-md"
            >
              Join us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
