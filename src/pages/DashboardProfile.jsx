import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBell,
  FaBuilding,
  FaChartLine,
  FaChevronRight,
  FaClipboardList,
  FaLeaf,
  FaRegClock,
  FaSearch,
  FaShoppingBag,
  FaSignOutAlt,
  FaUserCircle,
  FaWallet,
} from 'react-icons/fa';

const DashboardProfile = () => {
  const [mounted, setMounted] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 30);
    return () => window.clearTimeout(t);
  }, []);

  const user = useMemo(
    () => ({
      name: 'Jason Ranti',
      role: 'SME • Food & Beverage',
      org: 'Kopi Senja',
      location: 'Bandung, ID',
      verified: true,
    }),
    []
  );

  const stats = useMemo(
    () => [
      { label: 'Total Listings', value: '18', icon: FaClipboardList, tone: 'bg-primary-50 text-primary' },
      { label: 'Transactions', value: '42', icon: FaShoppingBag, tone: 'bg-[#F1F8F1] text-primary-dark' },
      { label: 'Estimated Value', value: 'Rp 12.4 jt', icon: FaWallet, tone: 'bg-[#F9FBF9] text-primary' },
    ],
    []
  );

  const transactions = useMemo(
    () => [
      { id: 'CZ-1042', item: 'Minyak Jelantah (25L)', date: '07 Apr 2026', status: 'Completed', amount: 'Rp 625.000' },
      { id: 'CZ-1038', item: 'Organik (120kg)', date: '03 Apr 2026', status: 'In Review', amount: 'Rp 360.000' },
      { id: 'CZ-1031', item: 'Plastik HDPE (40kg)', date: '28 Mar 2026', status: 'Completed', amount: 'Rp 480.000' },
      { id: 'CZ-1026', item: 'Cangkang Seafood (55kg)', date: '21 Mar 2026', status: 'Cancelled', amount: 'Rp 0' },
    ],
    []
  );

  const menu = useMemo(
    () => [
      { label: 'Dashboard', icon: FaChartLine },
      { label: 'Marketplace', icon: FaShoppingBag },
      { label: 'Listings', icon: FaClipboardList },
      { label: 'Profile', icon: FaUserCircle },
    ],
    []
  );

  const statusPill = (status) => {
    const base = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border';
    if (status === 'Completed') return `${base} bg-primary-50 text-primary-dark border-primary-100`;
    if (status === 'In Review') return `${base} bg-[#F1F8F1] text-primary border-primary-100`;
    return `${base} bg-white text-gray-500 border-gray-200`;
  };

  return (
    <div className="min-h-screen bg-primary-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div
          className={[
            'grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-6 lg:gap-8 items-start',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
            'transition-all duration-500 ease-out',
          ].join(' ')}
        >
          {/* Sidebar */}
          <aside className="bg-white rounded-[24px] shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary-100 flex items-center justify-center">
                  <FaLeaf className="text-primary text-lg" />
                </div>
                <div className="leading-tight">
                  <div className="text-gray-900 font-extrabold tracking-tight">CityZen</div>
                  <div className="text-xs text-gray-500">Waste-to-value workspace</div>
                </div>
              </div>
            </div>

            <nav className="p-3">
              {menu.map(({ label, icon: Icon }) => {
                const active = activeMenu === label;
                return (
                  <button
                    key={label}
                    onClick={() => setActiveMenu(label)}
                    className={[
                      'w-full flex items-center justify-between gap-3 px-4 py-3 rounded-[16px] text-left transition-all duration-300',
                      active
                        ? 'bg-primary text-white shadow-md'
                        : 'text-gray-700 hover:bg-primary-50 hover:-translate-y-[2px]',
                    ].join(' ')}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={[
                          'w-9 h-9 rounded-2xl flex items-center justify-center transition-colors',
                          active ? 'bg-white/15' : 'bg-primary-50 text-primary',
                        ].join(' ')}
                      >
                        <Icon className="text-sm" />
                      </span>
                      <span className="font-semibold text-sm">{label}</span>
                    </span>
                    <FaChevronRight className={active ? 'opacity-100' : 'opacity-30'} />
                  </button>
                );
              })}
            </nav>

            <div className="p-5 pt-2">
              <button 
                onClick={() => {
                  localStorage.removeItem('isAuthenticated');
                  window.location.href = '/profile';
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-[16px] border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:-translate-y-[2px]"
              >
                <FaSignOutAlt className="text-sm" />
                <span className="font-semibold text-sm">Logout</span>
              </button>
            </div>
          </aside>

          {/* Main */}
          <main className="space-y-6">
            {/* Top bar */}
            <div className="bg-white rounded-[24px] shadow-lg border border-gray-100 p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div className="flex-1">
                  <div className="text-gray-900 font-extrabold tracking-tight text-xl sm:text-2xl">
                    Dashboard Profile
                  </div>
                  <div className="text-gray-500 text-sm mt-1">
                    Ringkasan aktivitas akun, statistik singkat, dan riwayat transaksi.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative w-full sm:w-[280px]">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search transactions..."
                      className="w-full pl-11 pr-4 py-3 rounded-[18px] border border-gray-200 bg-[#F9FBF9] focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-100 transition"
                    />
                  </div>
                  <button className="w-11 h-11 rounded-[18px] border border-gray-200 bg-white hover:bg-primary-50 transition-all duration-300 hover:-translate-y-[2px]">
                    <FaBell className="mx-auto text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Banner */}
            <div className="hero-gradient rounded-[24px] shadow-xl overflow-hidden relative text-white">
              <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
              <div className="relative p-6 sm:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center">
                    <FaBuilding className="text-lg" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-extrabold tracking-tight">
                      {user.org}{' '}
                      {user.verified && (
                        <span className="ml-2 text-xs font-bold bg-white/15 border border-white/20 px-2 py-1 rounded-full align-middle">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="text-green-50/90 text-sm mt-1">
                      {user.name} • {user.role} • {user.location}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link 
                    to="/create-listing"
                    className="bg-white text-primary px-5 py-3 rounded-[16px] font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block text-center"
                  >
                    Create Listing
                  </Link>
                  <button className="bg-white/10 backdrop-blur border border-white/20 text-white px-5 py-3 rounded-[16px] font-bold transition-all duration-300 hover:bg-white/15 hover:-translate-y-1">
                    View Marketplace
                  </button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {stats.map(({ label, value, icon: Icon, tone }) => (
                <div
                  key={label}
                  className="bg-white rounded-[24px] shadow-lg border border-gray-100 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-gray-500 text-sm">{label}</div>
                      <div className="text-gray-900 font-extrabold text-2xl mt-1 tracking-tight">{value}</div>
                    </div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${tone}`}>
                      <Icon className="text-lg" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Transactions */}
            <div className="bg-white rounded-[24px] shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
                <div>
                  <div className="text-gray-900 font-extrabold tracking-tight text-lg">Transaction History</div>
                  <div className="text-gray-500 text-sm mt-1">Aktivitas terbaru penjualan & permintaan Anda.</div>
                </div>
                <button className="px-4 py-2.5 rounded-[14px] bg-primary text-white font-semibold text-sm shadow-md transition-all duration-300 hover:-translate-y-[2px] hover:shadow-xl">
                  Export
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-[#F9FBF9] text-gray-600">
                    <tr>
                      <th className="text-left px-6 py-4 font-semibold">ID</th>
                      <th className="text-left px-6 py-4 font-semibold">Item</th>
                      <th className="text-left px-6 py-4 font-semibold">Date</th>
                      <th className="text-left px-6 py-4 font-semibold">Status</th>
                      <th className="text-right px-6 py-4 font-semibold">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {transactions
                      .filter((t) => {
                        const q = query.trim().toLowerCase();
                        if (!q) return true;
                        return [t.id, t.item, t.status].some((x) => x.toLowerCase().includes(q));
                      })
                      .map((t) => (
                        <tr key={t.id} className="hover:bg-primary-50/50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">{t.id}</td>
                          <td className="px-6 py-4 text-gray-700 whitespace-nowrap">{t.item}</td>
                          <td className="px-6 py-4 text-gray-500 whitespace-nowrap">{t.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={statusPill(t.status)}>{t.status}</span>
                          </td>
                          <td className="px-6 py-4 text-right font-semibold text-gray-900 whitespace-nowrap">{t.amount}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>

          {/* Right panel */}
          <aside className="space-y-6">
            <div className="bg-white rounded-[24px] shadow-lg border border-gray-100 p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-gray-900 font-extrabold tracking-tight">Statistic</div>
                  <div className="text-gray-500 text-sm mt-1">Ringkasan performa 30 hari.</div>
                </div>
                <button className="w-9 h-9 rounded-2xl border border-gray-200 hover:bg-gray-50 transition">⋯</button>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-[20px] bg-primary-50 border border-primary-100 flex items-center justify-center">
                  <FaUserCircle className="text-primary text-2xl" />
                </div>
                <div className="leading-tight">
                  <div className="text-gray-900 font-bold">Good Morning, {user.name.split(' ')[0]}</div>
                  <div className="text-gray-500 text-sm">Continue to grow your impact.</div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between text-xs text-gray-500 font-semibold">
                  <span>Impact Score</span>
                  <span className="text-primary">82%</span>
                </div>
                <div className="mt-2 h-3 rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full w-[82%] bg-primary rounded-full transition-all duration-700" />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-[18px] bg-[#F9FBF9] border border-gray-100 p-4">
                  <div className="text-xs text-gray-500 font-semibold">CO₂ Saved</div>
                  <div className="text-gray-900 font-extrabold text-lg mt-1">1.2T</div>
                </div>
                <div className="rounded-[18px] bg-[#F9FBF9] border border-gray-100 p-4">
                  <div className="text-xs text-gray-500 font-semibold">Pickup Rate</div>
                  <div className="text-gray-900 font-extrabold text-lg mt-1">96%</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[24px] shadow-lg border border-gray-100 p-6">
              <div className="flex items-center justify-between">
                <div className="text-gray-900 font-extrabold tracking-tight">Upcoming</div>
                <span className="text-xs text-gray-500 font-semibold">Next 7 days</span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-[18px] border border-gray-100 bg-[#F9FBF9] p-4 flex items-start gap-3 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-lg">
                  <div className="w-10 h-10 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary">
                    <FaRegClock />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 text-sm">Pickup window</div>
                    <div className="text-gray-500 text-sm mt-1">Tomorrow • 10:00 - 12:00</div>
                  </div>
                </div>

                <div className="rounded-[18px] border border-gray-100 bg-[#F9FBF9] p-4 flex items-start gap-3 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-lg">
                  <div className="w-10 h-10 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary">
                    <FaLeaf />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 text-sm">Listing reminder</div>
                    <div className="text-gray-500 text-sm mt-1">Update volume for “Organik”</div>
                  </div>
                </div>
              </div>

              <button className="mt-5 w-full px-4 py-3 rounded-[18px] bg-primary text-white font-bold shadow-md transition-all duration-300 hover:-translate-y-[2px] hover:shadow-xl">
                View all
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;

