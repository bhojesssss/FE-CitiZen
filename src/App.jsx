import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import ListingDetail from './pages/ListingDetail';
import CreateListing from './pages/CreateListing';
import SuccessListing from './pages/SuccessListing';
import InfoLimbah from './pages/InfoLimbah';
import Kebutuhan from './pages/Kebutuhan';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/marketplace/:id" element={<ListingDetail />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/success-listing" element={<SuccessListing />} />
        <Route path="/info-limbah" element={<InfoLimbah />} />
        <Route path="/kebutuhan" element={<Kebutuhan />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
