const Steps = () => (
  <section
    className="py-32 bg-white"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900  mb-6 tracking-tighter">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 px-2">
        {[
          {
            title: "Create Account",
            desc: "Sign up for a free account if you want to get started.",
            icon: "user.png",
            num: "01",
          },
          {
            title: "Choose Products",
            desc: "Browse our catalog and select the products you need.",
            icon: "package.png",
            num: "02",
          },
          {
            title: "Start Creating",
            desc: "Launch into creating using our premium house of facilities.",
            icon: "rocket.png",
            num: "03",
          },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-white p-12 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group overflow-hidden shadow-sm"
          >
            <div className="absolute top-8 right-8">
              <span className="w-10 h-10 rounded-full bg-linear-to-r from-blue-700 to-purple-600 text-white flex items-center justify-center font-black text-sm">
                {s.num}
              </span>
            </div>
            <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center mb-10 mx-auto ring-1 ring-primary/10 group-hover:scale-110 transition-transform duration-500 hover:bg-white hover:shadow-inner">
              <img
                src={`/${s.icon}`}
                alt={s.title}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-5 tracking-tight">
                {s.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-md px-4">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Steps;