
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-4 py-16 dark:bg-slate-950">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-2xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-slate-950/60">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
          404 Error
        </p>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;