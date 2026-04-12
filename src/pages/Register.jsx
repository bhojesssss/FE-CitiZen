import React, { useMemo, useState } from 'react';
import { FaBuilding, FaEnvelope, FaIdCard, FaLeaf, FaLock, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AuthShell from './AuthShell';

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    accountType: 'SME',
    password: '',
    confirmPassword: '',
    agree: true,
  });

  const accountTypes = useMemo(() => ['SME', 'Industry'], []);

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('isAuthenticated', 'true');
    window.location.href = '/profile';
  };

  return (
    <AuthShell
      title="Create account"
      subtitle="Daftar untuk mulai menjual atau memproses limbah secara terstruktur dan menguntungkan."
      footer={
        <div className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-primary hover:text-primary-dark transition-colors">
            Sign in
          </Link>
        </div>
      }
    >
      <form className="space-y-5" onSubmit={handleRegister}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-semibold text-gray-700">Full Name</span>
            <div className="mt-2 relative">
              <FaIdCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={form.fullName}
                onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
                placeholder="Your name"
                className="w-full pl-11 pr-4 py-3 rounded-[18px] border border-gray-200 bg-[#F9FBF9] focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-100 transition"
                required
              />
            </div>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-gray-700">Email</span>
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-semibold text-gray-700">Phone</span>
            <div className="mt-2 relative">
              <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={form.phone}
                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                placeholder="+62..."
                className="w-full pl-11 pr-4 py-3 rounded-[18px] border border-gray-200 bg-[#F9FBF9] focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-100 transition"
                required
              />
            </div>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-gray-700">Organization</span>
            <div className="mt-2 relative">
              <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={form.organization}
                onChange={(e) => setForm((p) => ({ ...p, organization: e.target.value }))}
                placeholder="Business / Industry name"
                className="w-full pl-11 pr-4 py-3 rounded-[18px] border border-gray-200 bg-[#F9FBF9] focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-100 transition"
                required
              />
            </div>
          </label>
        </div>

        <div className="rounded-[24px] border border-gray-100 bg-[#F9FBF9] p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary">
              <FaLeaf />
            </div>
            <div>
              <div className="text-gray-900 font-extrabold tracking-tight">Account Type</div>
              <div className="text-gray-500 text-sm mt-1">Pilih peran Anda untuk personalisasi fitur.</div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {accountTypes.map((t) => {
              const active = form.accountType === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, accountType: t }))}
                  className={[
                    'px-4 py-3 rounded-[18px] font-extrabold transition-all duration-300',
                    active ? 'bg-primary text-white shadow-md' : 'bg-white border border-gray-200 text-gray-700 hover:bg-primary-50',
                  ].join(' ')}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          <label className="block">
            <span className="text-sm font-semibold text-gray-700">Confirm Password</span>
            <div className="mt-2 relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={form.confirmPassword}
                onChange={(e) => setForm((p) => ({ ...p, confirmPassword: e.target.value }))}
                type="password"
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3 rounded-[18px] border border-gray-200 bg-[#F9FBF9] focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-100 transition"
                required
              />
            </div>
          </label>
        </div>

        <label className="flex items-start gap-3 text-sm text-gray-600 font-semibold">
          <input
            type="checkbox"
            checked={form.agree}
            onChange={(e) => setForm((p) => ({ ...p, agree: e.target.checked }))}
            className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary-100"
          />
          <span>
            I agree to the <button className="font-bold text-primary hover:text-primary-dark transition-colors">Terms</button>{' '}
            and <button className="font-bold text-primary hover:text-primary-dark transition-colors">Privacy Policy</button>.
          </span>
        </label>

        <button className="w-full py-3.5 rounded-[18px] bg-primary text-white font-extrabold shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-xl">
          Create account
        </button>
      </form>
    </AuthShell>
  );
};

export default Register;

