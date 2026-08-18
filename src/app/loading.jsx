const LoadingPage = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08),transparent_30%),#f8fafc] dark:bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.12),transparent_30%),#020817]">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-full border-[6px] border-blue-500/15" />
          <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-blue-600 border-r-sky-400 animate-spin" />
          <div className="absolute inset-3 rounded-full border-[4px] border-transparent border-b-blue-500 border-l-cyan-300 animate-[spin_1.8s_linear_infinite_reverse]" />
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.36em] text-blue-600 dark:text-blue-300">
            Loading
          </p>
          <p className="mt-2 text-lg font-black tracking-tight text-slate-800 dark:text-slate-100">
            DriveFleet
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;