import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { LocalizationProvider } from './context/LocalizationProvider';
import { AuthProvider, useAuth } from './context/AuthProvider';
import { BookingsProvider } from './context/BookingsProvider';

import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { MenuIcon } from './components/icons';
import { ProtectedRoute } from './components/ui/ProtectedRoute';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import BookingSchedulePage from './pages/BookingSchedulePage';
import BookingPage from './pages/BookingPage';
import AdminBorrowPage from './pages/AdminBorrowPage';
import ReportsPage from './pages/ReportsPage';
import UserManagementPage from './pages/UserManagementPage';

const AppContent = () => {
    const { user } = useAuth();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    
    if (!user) {
        return (
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        );
    }
    
    return (
        <div className="flex flex-col min-h-screen bg-[#e6f0fa]">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main className="flex-1 overflow-y-auto">
                     <button className="md:hidden p-4 text-[#001f3f]" onClick={() => setSidebarOpen(true)}>
                        <MenuIcon className="h-6 w-6" />
                    </button>
                    <Routes>
                        <Route path="/" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
                        <Route path="/schedule" element={<ProtectedRoute><BookingSchedulePage /></ProtectedRoute>} />
                        <Route path="/book" element={<ProtectedRoute><BookingPage /></ProtectedRoute>} />
                        <Route path="/admin-borrow" element={<ProtectedRoute adminOnly><AdminBorrowPage /></ProtectedRoute>} />
                        <Route path="/reports" element={<ProtectedRoute adminOnly><ReportsPage /></ProtectedRoute>} />
                        <Route path="/users" element={<ProtectedRoute adminOnly><UserManagementPage /></ProtectedRoute>} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default function App() {
  return (
    <LocalizationProvider>
      <AuthProvider>
        <BookingsProvider>
            <AppContent />
        </BookingsProvider>
      </AuthProvider>
    </LocalizationProvider>
  );
}
