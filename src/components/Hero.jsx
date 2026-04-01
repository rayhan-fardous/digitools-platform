const Hero = () => (
  <section
    className="relative pt-24 pb-24  overflow-hidden"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2 text-left">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-8 ring-1 ring-primary/20 ring-inset tracking-wider">
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
          <button
            className="btn bg-linear-to-r from-blue-700 to-purple-600 
rounded-full px-10 h-14 text-white font-bold text-lg border-none
shadow-[0_0_15px_rgba(99,102,241,0.6)] 
hover:shadow-[0_0_25px_rgba(99,102,241,0.9)] 
hover:scale-105 transition-all duration-300"
          >
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
          className="w-full rounded-xl shadow-xl transition-transform duration-1000"
        />
      </div>
    </div>
  </section>
);

export default Hero;
