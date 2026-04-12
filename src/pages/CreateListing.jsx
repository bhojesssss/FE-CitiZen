import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCloudUploadAlt, FaTimes, FaCamera } from 'react-icons/fa';

const CreateListing = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const [form, setForm] = useState({
    name: '',
    type: '',
    condition: '',
    volume: '',
    unit: 'kg',
    price: '',
    isFree: false,
    city: '',
    address: '',
    description: '',
  });

  const [photos, setPhotos] = useState([]);
  const [errors, setErrors] = useState({});

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addPhotos(e.dataTransfer.files);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      addPhotos(e.target.files);
    }
  };

  const addPhotos = (fileList) => {
    const newPhotos = Array.from(fileList).map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setPhotos(prev => [...prev, ...newPhotos]);
    if (errors.photos) setErrors(e => ({ ...e, photos: null }));
  };

  const removePhoto = (index) => {
    setPhotos(prev => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].preview);
      updated.splice(index, 1);
      return updated;
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'This field is required';
    if (!form.type) newErrors.type = 'This field is required';
    if (!form.condition) newErrors.condition = 'This field is required';
    if (!form.volume) newErrors.volume = 'This field is required';
    if (!form.city) newErrors.city = 'This field is required';
    if (!form.isFree && !form.price) newErrors.price = 'This field is required (or check Free)';
    if (photos.length === 0) newErrors.photos = 'At least 1 photo is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePublish = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/success-listing');
    }
  };

  return (
    <div className="min-h-screen bg-primary-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[24px] shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-6 py-6 border-b border-gray-100 bg-[#F9FBF9]">
            <h1 className="text-2xl font-extrabold text-gray-900">Create New Listing</h1>
            <p className="text-gray-500 mt-1">Lengkapi informasi di bawah untuk menjual limbah Anda kepada industri.</p>
          </div>

          <form className="p-6 md:p-8 space-y-10" onSubmit={handlePublish}>
            
            {/* 1. Photo Upload */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <FaCamera className="text-primary text-xl" />
                <h2 className="text-lg font-bold text-gray-800">1. Upload Photos <span className="text-red-500">*</span></h2>
              </div>
              
              <div 
                className={`border-2 border-dashed rounded-[20px] p-8 text-center transition-all ${errors.photos ? 'border-red-400 bg-red-50' : 'border-primary-100 bg-[#F9FBF9] hover:bg-primary-50 hover:border-primary cursor-pointer'}`}
                onDragOver={handleDragOver}
                onDrop={handleFileDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                  <FaCloudUploadAlt className="text-3xl text-primary" />
                </div>
                <p className="text-gray-700 font-semibold mb-1">Click or drag your waste photo here</p>
                <p className="text-gray-400 text-sm">Support JPG, PNG, WEBP</p>
                <input 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  className="hidden" 
                  ref={fileInputRef} 
                  onChange={handleFileSelect}
                />
              </div>
              {errors.photos && <p className="text-red-500 text-sm font-semibold mt-1">{errors.photos}</p>}

              {/* Previews */}
              {photos.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-4">
                  {photos.map((p, idx) => (
                    <div key={idx} className="relative w-24 h-24 rounded-2xl overflow-hidden border border-gray-200 shadow-sm group">
                      <img src={p.preview} alt="preview" className="w-full h-full object-cover" />
                      <button 
                        type="button" 
                        onClick={() => removePhoto(idx)}
                        className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <FaTimes className="text-white text-xl" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <hr className="border-gray-100" />

            {/* 2. Basic Information */}
            <section className="space-y-6">
              <h2 className="text-lg font-bold text-gray-800">2. Basic Information</h2>
              
              <div className="space-y-5">
                <label className="block">
                  <span className="text-sm font-semibold text-gray-700 mb-2 block">Waste Name <span className="text-red-500">*</span></span>
                  <input
                    value={form.name}
                    onChange={(e) => { setForm(p => ({ ...p, name: e.target.value })); if (errors.name) setErrors(err => ({...err, name: null})) }}
                    placeholder="e.g. Used Cooking Oil from Padang Restaurant"
                    className={`w-full px-4 py-3 rounded-[16px] border ${errors.name ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-100 focus:border-primary-100'} bg-white focus:outline-none focus:ring-2 transition`}
                  />
                  {errors.name && <p className="text-red-500 text-sm font-semibold mt-1">{errors.name}</p>}
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="text-sm font-semibold text-gray-700 mb-2 block">Waste Type <span className="text-red-500">*</span></span>
                    <select
                      value={form.type}
                      onChange={(e) => { setForm(p => ({ ...p, type: e.target.value })); if (errors.type) setErrors(err => ({...err, type: null})) }}
                      className={`w-full px-4 py-3 rounded-[16px] border ${errors.type ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-100 focus:border-primary-100'} bg-white focus:outline-none focus:ring-2 transition appearance-none`}
                    >
                      <option value="">Select Category</option>
                      <option value="Used Cooking Oil">Used Cooking Oil</option>
                      <option value="Organic Waste">Organic Waste</option>
                      <option value="Seafood Shell">Seafood Shell</option>
                      <option value="HDPE Plastic">HDPE Plastic</option>
                      <option value="Wood Dust">Wood Dust</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.type && <p className="text-red-500 text-sm font-semibold mt-1">{errors.type}</p>}
                  </label>

                  <div>
                    <span className="text-sm font-semibold text-gray-700 mb-3 block">Condition <span className="text-red-500">*</span></span>
                    <div className="flex gap-3">
                      {['Good', 'Fair', 'Needs Processing'].map(cond => (
                        <label key={cond} className={`flex-1 flex justify-center px-3 py-3 border rounded-[16px] cursor-pointer transition-all ${form.condition === cond ? 'border-primary bg-primary text-white shadow-md font-bold' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                          <input 
                            type="radio" 
                            name="condition" 
                            value={cond} 
                            className="hidden"
                            onChange={() => { setForm(p => ({ ...p, condition: cond })); if (errors.condition) setErrors(err => ({...err, condition: null})) }}
                          />
                          <span className="text-sm text-center">{cond}</span>
                        </label>
                      ))}
                    </div>
                    {errors.condition && <p className="text-red-500 text-sm font-semibold mt-1">{errors.condition}</p>}
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* 3. Volume & Pricing */}
            <section className="space-y-6">
              <h2 className="text-lg font-bold text-gray-800">3. Volume & Pricing</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="block">
                  <span className="text-sm font-semibold text-gray-700 mb-2 block">Available Volume <span className="text-red-500">*</span></span>
                  <div className="flex">
                    <input
                      type="number"
                      value={form.volume}
                      onChange={(e) => { setForm(p => ({ ...p, volume: e.target.value })); if (errors.volume) setErrors(err => ({...err, volume: null})) }}
                      placeholder="Amount"
                      className={`w-full px-4 py-3 rounded-l-[16px] border ${errors.volume ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-100 focus:border-primary-100'} bg-white focus:outline-none focus:ring-2 transition`}
                    />
                    <select
                      value={form.unit}
                      onChange={(e) => setForm(p => ({ ...p, unit: e.target.value }))}
                      className="px-4 py-3 rounded-r-[16px] border-y border-r border-gray-200 bg-[#F9FBF9] focus:outline-none text-gray-700 font-semibold"
                    >
                      <option value="kg">kg</option>
                      <option value="liters">liters</option>
                      <option value="units">units</option>
                    </select>
                  </div>
                  {errors.volume && <p className="text-red-500 text-sm font-semibold mt-1">{errors.volume}</p>}
                </div>

                <div className="block">
                  <span className="text-sm font-semibold text-gray-700 mb-2 block flex items-center justify-between">
                    <span>Price per unit (Rp) <span className="text-red-500">*</span></span>
                    <label className="flex items-center gap-2 cursor-pointer font-normal">
                      <input 
                        type="checkbox" 
                        checked={form.isFree}
                        onChange={(e) => {
                          const free = e.target.checked;
                          setForm(p => ({ ...p, isFree: free, price: free ? '' : p.price }));
                          if (errors.price) setErrors(err => ({...err, price: null}));
                        }}
                        className="w-4 h-4 rounded text-primary border-gray-300 focus:ring-primary-100"
                      />
                      <span className="text-primary font-bold">List as Free</span>
                    </label>
                  </span>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-gray-400 select-none">Rp</span>
                    <input
                      type="number"
                      disabled={form.isFree}
                      value={form.price}
                      onChange={(e) => { setForm(p => ({ ...p, price: e.target.value })); if (errors.price) setErrors(err => ({...err, price: null})) }}
                      placeholder={form.isFree ? "Free" : "0"}
                      className={`w-full pl-11 pr-4 py-3 rounded-[16px] border ${errors.price ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-100 focus:border-primary-100'} ${form.isFree ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white'} focus:outline-none focus:ring-2 transition`}
                    />
                  </div>
                  {errors.price && <p className="text-red-500 text-sm font-semibold mt-1">{errors.price}</p>}
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* 4. Location */}
            <section className="space-y-6">
              <h2 className="text-lg font-bold text-gray-800">4. Location</h2>
              
              <div className="space-y-5">
                <label className="block max-w-sm">
                  <span className="text-sm font-semibold text-gray-700 mb-2 block">City <span className="text-red-500">*</span></span>
                  <select
                    value={form.city}
                    onChange={(e) => { setForm(p => ({ ...p, city: e.target.value })); if (errors.city) setErrors(err => ({...err, city: null})) }}
                    className={`w-full px-4 py-3 rounded-[16px] border ${errors.city ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-100 focus:border-primary-100'} bg-white focus:outline-none focus:ring-2 transition appearance-none`}
                  >
                    <option value="">Select City</option>
                    <option value="Jakarta">Jakarta</option>
                    <option value="Surabaya">Surabaya</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Medan">Medan</option>
                    <option value="Makassar">Makassar</option>
                    <option value="Semarang">Semarang</option>
                    <option value="Yogyakarta">Yogyakarta</option>
                  </select>
                  {errors.city && <p className="text-red-500 text-sm font-semibold mt-1">{errors.city}</p>}
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-gray-700 mb-2 block">Pickup Address (Optional)</span>
                  <textarea
                    value={form.address}
                    onChange={(e) => setForm(p => ({ ...p, address: e.target.value }))}
                    placeholder="Specific house block, street detail, etc."
                    rows={2}
                    className="w-full px-4 py-3 rounded-[16px] border border-gray-200 focus:ring-primary-100 focus:border-primary-100 bg-white focus:outline-none focus:ring-2 transition resize-none"
                  />
                </label>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* 5. Description */}
            <section className="space-y-6">
              <h2 className="text-lg font-bold text-gray-800">5. Description</h2>
              <textarea
                value={form.description}
                onChange={(e) => setForm(p => ({ ...p, description: e.target.value }))}
                placeholder="e.g. Used cooking oil from restaurant kitchen, already filtered, available for pickup every Monday & Thursday"
                rows={4}
                className="w-full px-4 py-3 rounded-[16px] border border-gray-200 focus:ring-primary-100 focus:border-primary-100 bg-white focus:outline-none focus:ring-2 transition resize-y"
              />
            </section>

            {/* Submit Actions */}
            <div className="pt-4 flex flex-col md:flex-row gap-4 items-center">
              <button 
                type="submit"
                className="w-full md:w-auto flex-1 py-4 rounded-[16px] bg-primary text-white font-extrabold shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-xl text-lg"
              >
                Publish Listing
              </button>
              <button 
                type="button"
                className="w-full md:w-auto px-8 py-4 rounded-[16px] bg-white border-2 border-gray-200 text-gray-700 font-bold transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 text-lg hover:-translate-y-[2px]"
              >
                Save as Draft
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;
