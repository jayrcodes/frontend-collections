import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import Home from '@src/pages/Home.tsx';
import Login from '@src/pages/Login.tsx';
import Profile from '@src/pages/Profile.tsx';
import AdminPanel from '@src/pages/AdminPanel.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
