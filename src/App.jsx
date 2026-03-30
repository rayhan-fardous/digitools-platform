import { useState } from "react";

const Navbar = () => (
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
    <div className="navbar-end gap-3">
      <a className="btn btn-ghost font-bold rounded-full text-gray-700 hover:text-white">Login</a>
      <a className="btn btn-primary rounded-full px-8 text-white shadow-lg shadow-primary/20 font-bold border-none">
        Get Started
      </a>
    </div>
  </nav>
);



export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
    </div>
  );
}