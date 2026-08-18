
"use client";

import Link from "next/link";
import { useState } from "react";

const RegisterForm = () => {
  const [form, setForm] = useState({ name: "", email: "", photoUrl: "", password: "" });
  const [error, setError] = useState("");

  const validatePassword = (value) => {
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const isLongEnough = value.length >= 6;
    return hasUppercase && hasLowercase && isLongEnough;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(form.password)) {
      setError("Password must include uppercase, lowercase, and be at least 6 characters long.");
      return;
    }

    const nextUser = {
      name: form.name,
      email: form.email,
      image: form.photoUrl || "https://via.placeholder.com/150",
      password: form.password,
    };

    localStorage.setItem("drivefleet-session", JSON.stringify(nextUser));
    window.location.href = "/login";
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 dark:bg-slate-950">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Register</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Create your DriveFleet account</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              placeholder="John Doe"
              required
            />
          </div>

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
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Photo URL</label>
            <input
              type="url"
              value={form.photoUrl}
              onChange={(e) => setForm({ ...form, photoUrl: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              placeholder="https://example.com/avatar.jpg"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              placeholder="Password"
              required
            />
          </div>

          {error && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300">
              {error}
            </p>
          )}

          <button type="submit" className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700">
            Register
          </button>

          <button type="button" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
            Continue with Google
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-blue-600 dark:text-blue-400">Login</Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterForm;