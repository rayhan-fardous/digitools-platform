const CTA = () => (
  <section
    className="bg-linear-to-r from-blue-700 to-purple-600"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    <div className="px-8 py-20 md:p-24 text-center text-white relative overflow-hidden group shadow-3xl shadow-primary/50">
      <h2 className="text-4xl font-extrabold mb-8 relative z-10 tracking-tighter leading-tight">
        Ready To Transform Your Workflow?
      </h2>
      <p className="text-primary-content text-lg mb-8 max-w-2xl mx-auto relative z-10 opacity-90 leading-relaxed">
        Join thousands of professionals who are already using Digitools to work
        smarter. Start your free trial today.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
        <button className="btn bg-white text-primary border-none hover:bg-gray-100 hover:scale-[1.05] active:scale-[0.95] rounded-full h-14 px-6 text-lg shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] transition-all">
          Explore Products
        </button>
        <button className="btn btn-outline border-white/30 text-white hover:bg-white/10 hover:scale-[1.05] active:scale-[0.95] hover:border-white rounded-full h-14 px-6 text-lg transition-all">
          View Pricing
        </button>
      </div>
      <div className="mt-6 text-white/40 text-md">
        14-day free trial • No credit card required • Cancel anytime
      </div>
    </div>
  </section>
);

export default CTA;