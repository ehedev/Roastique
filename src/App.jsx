import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './features/login/ProtectedRoute';

// Pages
import LandingPage from './pages/home/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import MenuManagementPage from './pages/admin/MenuManagementPage';
import ReservationsManagement from './pages/admin/ReservationsManagementPage';
import ReservationsPage from './pages/reservations/ReservationsPage';
import MyReservationsPage from './pages/reservations/MyReservationsPage';

function App() {
  return (
    <Routes>
      {/* Public Customer Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        
        {/* Customer Reservation Routes */}
        <Route path="/reservations" element={<ReservationsPage />} />

        <Route path="/my-reservations" element={<MyReservationsPage />} />
      </Route>

      {/* Auth Route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboardPage />} />
        <Route path='menu' element={<MenuManagementPage />} />
        
        {/* Admin Desk Route */}
        <Route path='reservations' element={<ReservationsManagement />} />
      </Route>

      {/* Unknown URLs */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;