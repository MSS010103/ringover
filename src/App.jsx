import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products/Products';
import './App.scss';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          {/* Sidebar content */}
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App; 