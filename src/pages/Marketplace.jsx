import React, { useEffect, useMemo, useState } from 'react';
import {
  FaFilter,
  FaHeart,
  FaRegHeart,
  FaSearch,
  FaShoppingCart,
  FaSlidersH,
  FaStar,
} from 'react-icons/fa';

const Marketplace = () => {
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [activeTab, setActiveTab] = useState('Sport');
  const [favorites, setFavorites] = useState(() => new Set());

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 30);
    return () => window.clearTimeout(t);
  }, []);

  const categories = useMemo(
    () => [
      'All Categories',
      'Minyak Jelantah',
      'Organik',
      'Plastik',
      'Seafood Shell',
      'Kayu',
    ],
    []
  );

  const tabs = useMemo(
    () => ['All', 'Deals', 'Crypto', 'Fashion', 'Health & Wellness', 'Art', 'Home', 'Sport', 'Music', 'Gaming'],
    []
  );

  const brands = useMemo(
    () => ['Adidas', 'Columbia', 'Demix', 'New Balance', 'Nike', 'Xiaomi', 'Asics'],
    []
  );

  const items = useMemo(
    () => [
      {
        id: 'w1',
        title: 'Minyak Jelantah (25L) • F&B',
        price: 'Rp 25.000/L',
        badge: 'Top item',
        rating: 4.7,
        category: 'Minyak Jelantah',
        imageTone: 'from-primary-50 to-white',
      },
      {
        id: 'w2',
        title: 'Plastik HDPE (40kg) • Clean',
        price: 'Rp 12.000/kg',
        badge: '',
        rating: 4.6,
        category: 'Plastik',
        imageTone: 'from-[#F1F8F1] to-white',
      },
      {
        id: 'w3',
        title: 'Cangkang Seafood (55kg)',
        price: 'Rp 8.000/kg',
        badge: '',
        rating: 4.5,
        category: 'Seafood Shell',
        imageTone: 'from-primary-50 to-white',
      },
      {
        id: 'w4',
        title: 'Organik (120kg) • Mixed',
        price: 'Rp 3.000/kg',
        badge: 'Top item',
        rating: 4.8,
        category: 'Organik',
        imageTone: 'from-[#F9FBF9] to-white',
      },
      {
        id: 'w5',
        title: 'Serbuk Kayu (90kg) • Dry',
        price: 'Rp 4.500/kg',
        badge: '',
        rating: 4.4,
        category: 'Kayu',
        imageTone: 'from-primary-50 to-white',
      },
      {
        id: 'w6',
        title: 'Plastik Campur (60kg)',
        price: 'Rp 6.500/kg',
        badge: '',
        rating: 4.2,
        category: 'Plastik',
        imageTone: 'from-[#F1F8F1] to-white',
      },
    ],
    []
  );

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredItems = useMemo(() => {
    const q = search.trim().toLowerCase();
    return items.filter((it) => {
      const matchCategory = activeCategory === 'All Categories' || it.category === activeCategory;
      const matchSearch = !q || [it.title, it.category, it.price].some((x) => x.toLowerCase().includes(q));
      return matchCategory && matchSearch;
    });
  }, [items, activeCategory, search]);

  return (
    <div className="min-h-screen bg-primary-50 font-sans">
      {/* Top bar (reference-like) */}
      <div className="sticky top-0 z-40 bg-primary-50/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="flex-1 flex items-center gap-3">
              <div className="relative flex-1">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search waste listings..."
                  className="w-full pl-11 pr-4 py-3 rounded-[18px] border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-100 transition"
                />
              </div>
              <button className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-[18px] border border-gray-200 bg-white hover:bg-primary-50 transition-all duration-300 hover:-translate-y-[2px]">
                <FaSlidersH className="text-gray-600" />
                <span className="text-sm font-semibold text-gray-700">Filters</span>
              </button>
            </div>

            <div className="flex items-center justify-between lg:justify-end gap-3">
              <div className="flex items-center gap-2 text-gray-700">
                <button className="w-11 h-11 rounded-[18px] bg-white border border-gray-200 hover:bg-primary-50 transition-all duration-300 hover:-translate-y-[2px]">
                  <FaHeart className="mx-auto text-gray-700" />
                </button>
                <button className="w-11 h-11 rounded-[18px] bg-white border border-gray-200 hover:bg-primary-50 transition-all duration-300 hover:-translate-y-[2px]">
                  <FaShoppingCart className="mx-auto text-gray-700" />
                </button>
              </div>
              <button className="px-5 py-3 rounded-[18px] bg-primary text-white font-bold shadow-md transition-all duration-300 hover:-translate-y-[2px] hover:shadow-xl">
                Create Listing
              </button>
            </div>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {tabs.map((t) => {
              const active = activeTab === t;
              return (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={[
                    'whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300',
                    active ? 'bg-primary text-white shadow-md' : 'bg-white border border-gray-200 text-gray-700 hover:bg-primary-50',
                  ].join(' ')}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div
          className={[
            'grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 lg:gap-8',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
            'transition-all duration-500 ease-out',
          ].join(' ')}
        >
          {/* Filters */}
          <aside className="bg-white rounded-[24px] shadow-lg border border-gray-100 p-5 sm:p-6 h-fit">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-gray-900 font-extrabold tracking-tight text-lg">Filters</div>
                <div className="text-gray-500 text-sm mt-1">Find waste by category & quality.</div>
              </div>
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-[14px] border border-gray-200 hover:bg-gray-50 transition">
                <FaFilter className="text-gray-600" />
                <span className="text-xs font-semibold text-gray-700">Reset</span>
              </button>
            </div>

            <div className="mt-6 rounded-[20px] bg-[#F9FBF9] border border-gray-100 p-5">
              <div className="text-gray-900 font-bold">Price Range</div>
              <div className="text-gray-500 text-sm mt-1">Average price is ≤ Rp 30.000</div>
              <div className="mt-4 h-12 rounded-[18px] bg-primary-50 border border-primary-100 flex items-center justify-center text-primary font-extrabold">
                Rp 3k — Rp 30k
              </div>
            </div>

            <div className="mt-5 rounded-[20px] bg-[#F9FBF9] border border-gray-100 p-5">
              <div className="text-gray-900 font-bold">Category</div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {categories.slice(0, 6).map((c) => {
                  const active = activeCategory === c;
                  return (
                    <button
                      key={c}
                      onClick={() => setActiveCategory(c)}
                      className={[
                        'px-3 py-2 rounded-[14px] text-xs font-semibold transition-all duration-300',
                        active ? 'bg-primary text-white shadow-md' : 'bg-white border border-gray-200 text-gray-700 hover:bg-primary-50',
                      ].join(' ')}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 rounded-[20px] bg-[#F9FBF9] border border-gray-100 p-5">
              <div className="text-gray-900 font-bold">Star Rating</div>
              <div className="mt-3 flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className={i < 4 ? '' : 'opacity-30'} />
                ))}
                <span className="ml-2 text-gray-500 text-sm font-semibold">4+ stars</span>
              </div>
            </div>

            <div className="mt-5 rounded-[20px] bg-[#F9FBF9] border border-gray-100 p-5">
              <div className="text-gray-900 font-bold">Brand (Industry)</div>
              <div className="mt-4 space-y-3">
                {brands.map((b) => (
                  <label key={b} className="flex items-center justify-between gap-3 text-sm text-gray-700">
                    <span className="font-semibold">{b}</span>
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary-100"
                      defaultChecked={b === 'Nike'}
                    />
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[20px] bg-[#F9FBF9] border border-gray-100 p-5">
              <div className="text-gray-900 font-bold">Delivery Options</div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button className="px-3 py-2 rounded-[14px] bg-primary text-white font-bold text-sm shadow-md transition-all duration-300 hover:-translate-y-[2px] hover:shadow-xl">
                  Standard
                </button>
                <button className="px-3 py-2 rounded-[14px] bg-white border border-gray-200 text-gray-700 font-bold text-sm hover:bg-primary-50 transition-all duration-300 hover:-translate-y-[2px]">
                  Pick Up
                </button>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <section className="space-y-5">
            <div className="bg-white rounded-[24px] shadow-lg border border-gray-100 p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="text-gray-900 font-extrabold tracking-tight text-lg">Marketplace</div>
                  <div className="text-gray-500 text-sm mt-1">
                    Jelajahi listing limbah yang tersedia untuk diproses menjadi nilai ekonomi.
                  </div>
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  Showing <span className="text-gray-900">{filteredItems.length}</span> items
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
              {filteredItems.map((it) => {
                const fav = favorites.has(it.id);
                return (
                  <article
                    key={it.id}
                    className="bg-white rounded-[24px] shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                  >
                    <div className={`relative h-44 bg-gradient-to-br ${it.imageTone}`}>
                      <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(circle, #388E3C 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
                      <button
                        onClick={() => toggleFavorite(it.id)}
                        className="absolute right-4 top-4 w-10 h-10 rounded-2xl bg-white/90 backdrop-blur border border-gray-100 flex items-center justify-center transition-all duration-300 hover:-translate-y-[2px]"
                        aria-label="Toggle favorite"
                      >
                        {fav ? <FaHeart className="text-primary" /> : <FaRegHeart className="text-gray-700" />}
                      </button>
                      {it.badge ? (
                        <span className="absolute left-4 top-4 px-3 py-1 rounded-full text-xs font-bold bg-primary text-white shadow-md">
                          {it.badge}
                        </span>
                      ) : null}
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-gray-900 font-extrabold tracking-tight truncate">{it.title}</div>
                          <div className="text-gray-500 text-sm mt-1">{it.category}</div>
                        </div>
                        <div className="text-xs font-bold text-gray-700 bg-[#F9FBF9] border border-gray-100 px-2 py-1 rounded-full whitespace-nowrap">
                          {it.rating.toFixed(1)}/5
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-primary font-extrabold">{it.price}</div>
                        <button className="px-4 py-2.5 rounded-[14px] bg-primary text-white font-bold shadow-md transition-all duration-300 group-hover:-translate-y-[2px] group-hover:shadow-xl">
                          Detail
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;

