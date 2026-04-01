import { FaCartShopping } from 'react-icons/fa6';

const Navbar = ({ cartCount, onCartClick }) => (
  <nav
    className="navbar bg-white px-4 py-4 max-w-7xl mx-auto"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    <div className="navbar-start">
      <a className="text-2xl font-black text-primary cursor-pointer tracking-tighter">
        DigiTools
      </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 font-semibold gap-2 text-gray-600">
        <li>
          <a className="hover:text-primary">Products</a>
        </li>
        <li>
          <a className="hover:text-primary">Features</a>
        </li>
        <li>
          <a className="hover:text-primary">Pricing</a>
        </li>
        <li>
          <a className="hover:text-primary">Testimonials</a>
        </li>
        <li>
          <a className="hover:text-primary">FAQ</a>
        </li>
      </ul>
    </div>
    <div className="navbar-end gap-3 flex items-center">
      <button
        onClick={onCartClick}
        className="btn btn-ghost hover:bg-amber-300 btn-circle text-gray-600 indicator relative"
      >
        {cartCount > 0 && (
          <span className="indicator-item badge bg-red-500 badge-sm text-[10px] text-white shadow-sm border-none right-1 top-1">
            {cartCount}
          </span>
        )}
        <FaCartShopping className="text-lg" />
      </button>
      <a className="btn btn-ghost font-bold rounded-full text-gray-700 hover:text-white">
        Login
      </a>
      <a className="btn bg-linear-to-r from-blue-700 to-purple-600 hover:from-purple-600 hover:to-pink-500 rounded-full px-8 text-white font-bold border-none shadow-lg shadow-primary/20 transition-all duration-300 hidden sm:flex">
        Get Started
      </a>
    </div>
  </nav>
);

export default Navbar;