import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import DashboardProfile from './pages/DashboardProfile';
import ListingDetail from './pages/ListingDetail';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/marketplace/:id" element={<ListingDetail />} />
        <Route path="/dashboard" element={<DashboardProfile />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
