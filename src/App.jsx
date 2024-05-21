import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Client = React.lazy(() => import('./pages/Client'))
const Login = React.lazy(() => import('./pages/Login'))
const Admin = React.lazy(() => import('./pages/Admin'))

function App() {
  return (
    <BrowserRouter>
      <React.Suspense>
        <Routes>
          <Route path="/" element={<Client />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
