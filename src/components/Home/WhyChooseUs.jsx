
const features = [
  {
    title: "Premium Fleet",
    text: "From economical daily drivers to luxury vehicles, our fleet is selected for comfort, reliability, and style.",
    icon: "✦",
    accent: "from-blue-600 to-sky-500",
  },
  {
    title: "Transparent Pricing",
    text: "Clear rental terms, predictable pricing, and honest communication from booking to pickup.",
    icon: "◌",
    accent: "from-slate-700 to-slate-900",
  },
  {
    title: "Fast Support",
    text: "Our team helps with trip planning, vehicle details, and booking assistance whenever you need guidance.",
    icon: "⚡",
    accent: "from-emerald-500 to-teal-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[radial-gradient(circle_at_top,_rgba(103,217,214,0.12),transparent_26%),linear-gradient(180deg,#f2f7ff_0%,#edf4ff_38%,#f6fbfe_100%)] px-4 py-20 dark:bg-[radial-gradient(circle_at_top,_rgba(103,217,214,0.1),transparent_26%),linear-gradient(180deg,#050d18_0%,#0a1424_38%,#07101d_100%)]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <span className="inline-block rounded-full bg-linear-to-r from-[#edf4ff] via-[#ecfbfb] to-[#f0efff] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-slate-700 shadow-[0_8px_18px_rgba(94,141,255,0.12)] dark:from-[#102036] dark:via-[#0f2436] dark:to-[#11253d] dark:text-cyan-100">
            Why choose us
          </span>
          <h2 className="section-title text-3xl font-black tracking-tight md:text-4xl">
            A smarter way to rent a car
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(237,244,255,0.96),rgba(226,242,255,0.96))] p-7 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/60 hover:shadow-[0_26px_60px_rgba(91,124,255,0.18)] dark:border-slate-800 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(14,25,38,0.96),rgba(12,20,35,0.98))] dark:shadow-slate-950/50"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-blue-400 to-transparent opacity-70" />

              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-r ${feature.accent} text-xl font-black text-white shadow-md`}>
                {feature.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;