
const steps = [
  {
    title: "Browse Premium Cars",
    text: "Explore a handpicked fleet of premium vehicles designed for daily driving, long weekends, and executive travel.",
    accent: "from-sky-500 to-blue-600",
  },
  {
    title: "Choose Your Plan",
    text: "Select your vehicle, pickup time, and rental duration to match your schedule, budget, and travel goals.",
    accent: "from-slate-700 to-slate-900",
  },
  {
    title: "Book Securely",
    text: "Confirm your reservation quickly and enjoy a clear, trustworthy, and hassle-free rental experience.",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Drive and Enjoy",
    text: "Hit the road with confidence, flexible support, and a premium rental experience from pickup to return.",
    accent: "from-violet-500 to-fuchsia-600",
  },
];

const marqueeSteps = [...steps, ...steps];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(94,141,255,0.12),transparent_30%),linear-gradient(180deg,#f5f9ff_0%,#edf5ff_38%,#f7fbff_100%)] px-4 py-20 dark:bg-[radial-gradient(circle_at_top,_rgba(94,141,255,0.12),transparent_30%),linear-gradient(180deg,#07111d_0%,#0b1729_38%,#081521_100%)]">
      <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-blue-500/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <span className="inline-block rounded-full bg-linear-to-r from-[#edf4ff] via-[#ecfbfb] to-[#f0efff] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-slate-700 shadow-[0_8px_18px_rgba(94,141,255,0.12)] dark:from-[#102036] dark:via-[#0f2436] dark:to-[#11253d] dark:text-cyan-100">
            How it works
          </span>
          <h2 className="section-title text-3xl font-black tracking-tight md:text-4xl">
            Start renting in four easy steps
          </h2>
        </div>

        <div className="marquee-group relative overflow-hidden">
          <div className="marquee-track flex min-w-max gap-6 py-2 hover:[animation-play-state:paused]">
            {marqueeSteps.map((step, index) => (
              <div
                key={`${step.title}-${index}`}
                className="group relative w-[300px] shrink-0 overflow-hidden rounded-[28px] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(237,244,255,0.96),rgba(226,242,255,0.96))] p-7 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/60 hover:shadow-[0_26px_60px_rgba(91,124,255,0.18)] dark:border-slate-800 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(14,25,38,0.96),rgba(12,20,35,0.98))] dark:shadow-slate-950/50"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-blue-400 to-transparent opacity-70" />

                <div className="mb-5 flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-r ${step.accent} text-lg font-black text-white shadow-md`}>
                    {index % steps.length + 1}
                  </div>
                  <span className="rounded-full border border-slate-200 bg-white/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
                    Step {index % steps.length + 1}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;