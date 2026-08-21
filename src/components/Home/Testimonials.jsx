import React from "react";

export default function Testimonials() {
  return (
    <section className="bg-[radial-gradient(circle_at_top,_rgba(103,217,214,0.12),transparent_26%),linear-gradient(180deg,#f2f7ff_0%,#edf4ff_38%,#f6fbfe_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(103,217,214,0.1),transparent_26%),linear-gradient(180deg,#050d18_0%,#0a1424_38%,#07101d_100%)] px-4 py-24 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
       <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-slate-200/60 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-slate-300 mb-3 shadow-sm">
            Client Feedback
          </span>
          <br/>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block">
            Trusted by{" "}
            <span className="bg-linear-to-r from-slate-900 via-blue-600 to-indigo-500 dark:from-white dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
              Happy Drivers
            </span>
            <div className="h-1 w-24 bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full mx-auto mt-2"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[radial-gradient(circle_at_top,_rgba(103,217,214,0.12),transparent_26%),linear-gradient(180deg,#f2f7ff_0%,#edf4ff_38%,#f6fbfe_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(103,217,214,0.1),transparent_26%),linear-gradient(180deg,#050d18_0%,#0a1424_38%,#07101d_100%)] border border-slate-200/90 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/40 p-8 rounded-3xl shadow-xl dark:shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center mb-6">
              <div className="flex text-amber-400 text-base">★★★★★</div>
              <span className="ml-3 text-xs font-semibold text-slate-500 dark:text-slate-400">5.0</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8">
              "The booking process was lightning fast and the car condition was spotless. Highly recommended!"
            </p>
            <div className="flex items-center gap-4">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Rahim Ahmed" className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/20" />
              <div>
                <h4 className="font-semibold text-base text-slate-900 dark:text-white">Rahim Ahmed</h4>
                <span className="text-xs text-slate-500 dark:text-slate-400">Verified Renter</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[radial-gradient(circle_at_top,_rgba(103,217,214,0.12),transparent_26%),linear-gradient(180deg,#f2f7ff_0%,#edf4ff_38%,#f6fbfe_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(103,217,214,0.1),transparent_26%),linear-gradient(180deg,#050d18_0%,#0a1424_38%,#07101d_100%)] border border-slate-200/90 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/40 p-8 rounded-3xl shadow-xl dark:shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center mb-6">
              <div className="flex text-amber-400 text-base">★★★★★</div>
              <span className="ml-3 text-xs font-semibold text-slate-500 dark:text-slate-400">5.0</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8">
              "Amazing fleet selection! Got the W16 engineering marvel experience without any hassle."
            </p>
            <div className="flex items-center gap-4">
              <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Tanvir Hasan" className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/20" />
              <div>
                <h4 className="font-semibold text-base text-slate-900 dark:text-white">Tanvir Hasan</h4>
                <span className="text-xs text-slate-500 dark:text-slate-400">Car Enthusiast</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[radial-gradient(circle_at_top,_rgba(103,217,214,0.12),transparent_26%),linear-gradient(180deg,#f2f7ff_0%,#edf4ff_38%,#f6fbfe_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(103,217,214,0.1),transparent_26%),linear-gradient(180deg,#050d18_0%,#0a1424_38%,#07101d_100%)] border border-slate-200/90 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/40 p-8 rounded-3xl shadow-xl dark:shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center mb-6">
              <div className="flex text-amber-400 text-base">★★★★★</div>
              <span className="ml-3 text-xs font-semibold text-slate-500 dark:text-slate-400">5.0</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8">
              "Transparent pricing with no hidden charges. Customer support team was extremely helpful."
            </p>
            <div className="flex items-center gap-4">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Nusrat Jahan" className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/20" />
              <div>
                <h4 className="font-semibold text-base text-slate-900 dark:text-white">Nusrat Jahan</h4>
                <span className="text-xs text-slate-500 dark:text-slate-400">Business Traveler</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}