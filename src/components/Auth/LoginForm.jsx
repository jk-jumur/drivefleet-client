
"use client";

import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("drivefleet-session") || "null");

    if (!user || user.email !== form.email) {
      setMessage("Invalid email or password.");
      return;
    }

    if (user.password !== form.password) {
      setMessage("Incorrect password. Please try again.");
      return;
    }

    setMessage("Login successful.");
    window.location.href = "/";
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 dark:bg-slate-950">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Login</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Welcome back to DriveFleet</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              placeholder="••••••••"
              required
            />
          </div>

          {message && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300">
              {message}
            </p>
          )}

          <button type="submit" className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700">
            Login
          </button>

          <button type="button" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
            Continue with Google
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-bold text-blue-600 dark:text-blue-400">Register</Link>
        </p>
      </div>
    </main>
  );
};

export default LoginForm;