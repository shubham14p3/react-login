// src/routes/index.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/login';
import Dashboard from '../components/dashboard';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default AppRoutes;
