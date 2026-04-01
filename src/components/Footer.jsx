import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => (
  <footer
    className="bg-[#080a11] pt-32 pb-16 text-white"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
        <div className="lg:col-span-2">
          <a className="text-3xl font-black text-white mb-8 block">DigiTools</a>
          <p className="text-white/40 leading-relaxed text-base max-w-sm mb-10">
            Access premium AI tools, design assets, and statistics and
            productivity software all in one place. Start creating today for
            free.
          </p>
          <div className="flex items-center gap-6">
            <a className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer group shadow-2xl">
              <FaFacebookF className="text-2xl text-white/40 group-hover:text-white transition-colors" />
            </a>
            <a className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer group shadow-2xl">
              <FaInstagram className="text-2xl text-white/40 group-hover:text-white transition-colors" />
            </a>
            <a className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer group shadow-2xl">
              <FaXTwitter className="text-2xl text-white/40 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-black mb-8 text-[11px] uppercase tracking-[0.2em] text-white">
            Product
          </h4>
          <ul className="space-y-5 text-white/40 text-sm">
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
          <ul className="space-y-5 text-white/40 text-sm">
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
          <ul className="space-y-5 text-white/40 text-sm">
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
        <div className="flex gap-12">
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

export default Footer;
