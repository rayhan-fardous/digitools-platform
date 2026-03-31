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
      <a className="btn btn-ghost font-bold rounded-full text-gray-700 hover:text-white">
        Login
      </a>
      <a className="btn btn-primary rounded-full px-8 text-white shadow-lg shadow-primary/20 font-bold border-none">
        Get Started
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section
    className="relative pt-24 pb-24 overflow-hidden"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2 text-left">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-8 ring-1 ring-blue-100 ring-inset tracking-wider">
          New: AI-Powered Tools Available
        </div>
        <h1 className="text-6xl font-black leading-[1.1] mb-8 tracking-tighter text-gray-900">
          Supercharge Your <br />
          <span className="text-primary">Digital Workflow</span>
        </h1>
        <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-lg font-medium">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. <br></br>{" "}
          Explore Products
        </p>
        <div className="flex items-center gap-6">
          <button className="btn btn-primary rounded-full px-10 h-14 text-white shadow-2xl shadow-primary/30 border-none font-bold text-lg">
            Explore Products
          </button>
          <button className="px-2 h-14 flex items-center font-bold text-blue-700 hover:bg-blue-700 border border-blue-700 rounded-full group transition-all duration-300 hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent">
            <span className="w-10 h-12 rounded-full flex items-center justify-center transition-all group-hover:scale-110">
              <img
                src="/Play.png"
                alt="Play"
                className="translate-x-0.5 transition-all group-hover:invert group-hover:brightness-0"
              />
            </span>
            Watch Demo
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 relative">
        <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <img
          src="/banner.png"
          alt="Hero Illustration"
          className="w-full rounded-xl shadow-xl skew-y-1 hover:skew-y-0 transition-transform duration-1000"
        />
      </div>
    </div>
  </section>
);





const Footer = () => (
  <footer
    className="bg-[#080a11] pt-32 pb-16 text-white"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
        <div className="lg:col-span-2">
          <a className="text-3xl font-black text-white mb-8 block">
            DigiTools
          </a>
          <p className="text-white/40 leading-relaxed font-bold text-base max-w-sm mb-10">
            Access premium AI tools, design assets, and statistics and
            productivity software all in one place. Start creating today for
            free.
          </p>
          <div className="flex items-center gap-5">
            {[1, 2, 3].map((s) => (
              <a
                key={s}
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer group shadow-lg"
              >
                <div className="w-6 h-6 bg-white/60 group-hover:bg-white rounded-md transition-colors"></div>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-black mb-8 text-[11px] uppercase tracking-[0.2em] text-white">
            Product
          </h4>
          <ul className="space-y-5 text-white/40 font-bold text-sm">
            <li>
              <a className="hover:text-primary transition-colors cursor-pointer">
                Features
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors cursor-pointer">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors cursor-pointer">
                Temp Kit
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors cursor-pointer">
                Integrations
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-black mb-8 text-[11px] uppercase tracking-[0.2em] text-white">
            Company
          </h4>
          <ul className="space-y-5 text-white/40 font-bold text-sm">
            <li>
              <a className="hover:text-primary transition-colors cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors cursor-pointer">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors cursor-pointer">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors cursor-pointer">
                Press
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-black mb-8 text-[11px] uppercase tracking-[0.2em] text-white">
            Resources
          </h4>
          <ul className="space-y-5 text-white/40 font-bold text-sm">
            <li>
              <a className="hover:text-primary transition-colors cursor-pointer">
                Documentation
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors cursor-pointer">
                Help Center
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors cursor-pointer">
                Community
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors cursor-pointer">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[14px] font-black">
        <p>&copy; 2025 DigiTools Inc. Everything Reserved.</p>
        <div className="flex gap-10">
          <a className="hover:text-white transition-colors cursor-pointer">
            Privacy Path
          </a>
          <a className="hover:text-white transition-colors cursor-pointer">
            Terms of Services
          </a>
          <a className="hover:text-white transition-colors cursor-pointer">
            Connect
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
