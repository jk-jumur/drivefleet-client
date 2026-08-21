"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { User, Mail, Link2, Lock } from "lucide-react";
import { signUp, signIn } from "@/lib/auth-client"; 
import { redirect, useRouter } from "next/navigation";

const RegisterForm = () => {
  const [form, setForm] = useState({ name: "", email: "", photoUrl: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const validatePassword = (value) => {
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const isLongEnough = value.length >= 6;
    return hasUppercase && hasLowercase && isLongEnough;
  };
const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(form.password)) {
      toast.error("Password must include uppercase, lowercase, and be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await signUp.email({
        email: form.email,
        password: form.password,
        name: form.name,
        image: form.photoUrl || "https://via.placeholder.com/150",
         callbackURL: "/"
      });

      if (error) {
        toast.error(error.message || "Registration failed.");
        setLoading(false);
        return;
      }

  if(data){
      router.push("/")
  }

    } catch (err) {
      console.log("registration", err)
      toast.error("An unexpected error occurred.");
      setLoading(false);
    }
  };
  const handleGoogleLogin = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.15),_transparent_32%),linear-gradient(180deg,_#edf3fb_0%,_#f5f7fb_100%)] px-4 py-12 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.18),_transparent_28%),linear-gradient(180deg,_#020817_0%,_#0f172a_100%)]">
      <div className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-[0_20px_60px_rgba(2,6,23,0.45)]">
        <div className="absolute inset-x-8 top-0 h-24 rounded-b-full bg-gradient-to-r from-blue-100 via-cyan-100 to-indigo-100 blur-2xl dark:from-blue-900/50 dark:via-cyan-900/40 dark:to-indigo-950/60" />

        <div className="relative">
          <div className="mb-6 text-center">
            <span className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-2 text-lg font-black text-white shadow-lg shadow-blue-500/30">
              DF
            </span>
            <h1 className="mt-5 text-3xl font-black text-slate-900 dark:text-white">Register</h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Create your DriveFleet account</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Name</label>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 transition-all duration-200 focus-within:border-blue-500 focus-within:bg-white dark:border-slate-700 dark:bg-slate-800 dark:focus-within:bg-slate-900">
                <User className="h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent py-3 text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Email</label>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 transition-all duration-200 focus-within:border-blue-500 focus-within:bg-white dark:border-slate-700 dark:bg-slate-800 dark:focus-within:bg-slate-900">
                <Mail className="h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent py-3 text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Photo URL</label>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 transition-all duration-200 focus-within:border-blue-500 focus-within:bg-white dark:border-slate-700 dark:bg-slate-800 dark:focus-within:bg-slate-900">
                <Link2 className="h-4 w-4 text-slate-400" />
                <input
                  type="url"
                  value={form.photoUrl}
                  onChange={(e) => setForm({ ...form, photoUrl: e.target.value })}
                  className="w-full bg-transparent py-3 text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Password</label>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 transition-all duration-200 focus-within:border-blue-500 focus-within:bg-white dark:border-slate-700 dark:bg-slate-800 dark:focus-within:bg-slate-900">
                <Lock className="h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full bg-transparent py-3 text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#5e8dff] via-[#67d9d6] to-[#7b6df2] py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_30px_rgba(94,141,255,0.28)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
            >
              <span>{loading ? "Registering..." : "Register"}</span>
            </button>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-red-500 text-[10px] font-black text-white">G</span>
              Continue with Google
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400">Login</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default RegisterForm;