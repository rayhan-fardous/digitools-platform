const Pricing = () => (
  <section
    className="py-32 bg-gray-50/50"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tighter">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Choose the plan that fits your needs. Map local current plan for more
          details.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
        <div className="bg-white p-12 rounded-2xl border border-gray-100/50 hover:shadow-xl transition-all duration-300 relative group overflow-hidden shadow-sm grow flex flex-col">
          <div className="mb-4">
            <h3 className="text-2xl font-black text-gray-900 mb-2">Starter</h3>
            <p className="text-gray-400 font-bold text-sm">
              Perfect for simple product start
            </p>
          </div>
          <div className="mb-4">
            <span className="text-4xl font-semibold text-gray-900">$0</span>
            <span className="text-gray-400 font-bold ml-1 text-lg">/Month</span>
          </div>
          <div className="space-y-3 mb-6 grow">
            {[
              "Access to 10 products",
              "Basic templates",
              "Community support",
              "Single user account",
            ].map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-4 text-[15px] text-gray-500"
              >
                <svg
                  className="w-5 h-5 text-green-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {f}
              </div>
            ))}
          </div>
          <button
            className="btn bg-linear-to-r from-blue-700 to-purple-700 
hover:from-purple-600 hover:to-pink-500 btn-block hover:scale-[1.02] active:scale-[0.98] rounded-full h-14 text-white shadow-xl shadow-primary/20 border-none font-bold text-lg hover:shadow-2xl transition-all"
          >
            Get Started Now
          </button>
        </div>

        <div className="bg-primary p-1 rounded-2xl relative grow flex flex-col z-10 shadow-3xl shadow-primary/40 hover:shadow-xl transition-all duration-300 group">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-100 text-[#BB4D00] px-5 py-2 rounded-full text-md font-semibold shadow-xl">
            Most Popular
          </div>
          <div className="bg-primary p-11 rounded-[3rem] h-full flex flex-col text-white">
            <div className="mb-4">
              <h3 className="text-2xl font-black mb-2">Pro</h3>
              <p className="text-white/70 font-bold text-sm">
                For independent creators
              </p>
            </div>
            <div className="mb-4">
              <span className="text-4xl font-semibold">$29</span>
              <span className="text-white/70 font-bold ml-1 text-lg">
                /Month
              </span>
            </div>
            <div className="space-y-3 mb-6 grow">
              {[
                "Access to all premium tools",
                "Unlimited templates",
                "Priority support",
                "Unlimited projects",
                "Cloud sync",
                "Advanced analytics",
              ].map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 text-[15px] text-white/90"
                >
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {f}
                </div>
              ))}
            </div>
            <button className="btn bg-white text-primary border-none hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98] rounded-full h-14 btn-block shadow-2xl font-bold text-lg px-8 transition-all">
              Start Free Trial
            </button>
          </div>
        </div>

        <div className="bg-white p-12 rounded-2xl border border-gray-100/50 hover:shadow-xl transition-all duration-300 relative group overflow-hidden shadow-sm grow flex flex-col">
          <div className="mb-4">
            <h3 className="text-2xl font-black text-gray-900 mb-2">
              Enterprise
            </h3>
            <p className="text-gray-400 font-bold text-sm">
              For team and professionals
            </p>
          </div>
          <div className="mb-4">
            <span className="text-4xl font-semibold text-gray-900">$99</span>
            <span className="text-gray-400 font-bold ml-1 text-lg">/Month</span>
          </div>
          <div className="space-y-3 mb-6 grow">
            {[
              "Everything in Pro",
              "Unlimited users",
              "Customizations",
              "Personal content",
              "Admin panel",
              "Custom branding",
            ].map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-4 text-[15px] text-gray-500"
              >
                <svg
                  className="w-5 h-5 text-green-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {f}
              </div>
            ))}
          </div>
          <button
            className="btn bg-linear-to-r from-blue-700 to-purple-700 
hover:from-purple-600 hover:to-pink-500 btn-block hover:scale-[1.02] active:scale-[0.98] rounded-full h-14 text-white shadow-xl shadow-primary/20 border-none font-bold text-lg hover:shadow-2xl transition-all"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;