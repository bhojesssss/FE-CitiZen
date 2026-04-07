import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaGoogle, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AuthShell from './AuthShell';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '', remember: true });

  return (
    <AuthShell
      title="Sign in"
      subtitle="Masuk untuk mengelola listing limbah, memantau transaksi, dan terhubung dengan industri pengolah."
      footer={
        <div className="text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link to="/register" className="font-bold text-primary hover:text-primary-dark transition-colors">
            Sign up
          </Link>
        </div>
      }
    >
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <label className="block">
          <span className="text-sm font-semibold text-gray-700">Email Address</span>
          <div className="mt-2 relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              type="email"
              placeholder="name@company.com"
              className="w-full pl-11 pr-4 py-3 rounded-[18px] border border-gray-200 bg-[#F9FBF9] focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-100 transition"
              required
            />
          </div>
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-gray-700">Password</span>
          <div className="mt-2 relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={form.password}
              onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
              type="password"
              placeholder="••••••••"
              className="w-full pl-11 pr-4 py-3 rounded-[18px] border border-gray-200 bg-[#F9FBF9] focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-100 transition"
              required
            />
          </div>
        </label>

        <div className="flex items-center justify-between gap-3">
          <label className="flex items-center gap-2 text-sm text-gray-600 font-semibold">
            <input
              type="checkbox"
              checked={form.remember}
              onChange={(e) => setForm((p) => ({ ...p, remember: e.target.checked }))}
              className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary-100"
            />
            Remember me
          </label>
          <button type="button" className="text-sm font-bold text-primary hover:text-primary-dark transition-colors">
            Forgot password
          </button>
        </div>

        <button className="w-full py-3.5 rounded-[18px] bg-primary text-white font-extrabold shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-xl">
          Sign in
        </button>

        <div className="flex items-center gap-3">
          <div className="h-px bg-gray-200 flex-1" />
          <div className="text-xs text-gray-500 font-semibold">or continue with</div>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-3 rounded-[18px] bg-white border border-gray-200 text-gray-700 font-bold transition-all duration-300 hover:-translate-y-[2px] hover:shadow-lg"
          >
            <FaGoogle className="text-primary" />
            Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-3 rounded-[18px] bg-white border border-gray-200 text-gray-700 font-bold transition-all duration-300 hover:-translate-y-[2px] hover:shadow-lg"
          >
            <FaGithub />
            GitHub
          </button>
        </div>
      </form>
    </AuthShell>
  );
};

export default Login;

