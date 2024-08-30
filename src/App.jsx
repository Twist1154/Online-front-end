import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';

// Import your page components
import HomePage from './pages/HomePage'; // Adjust the path if needed
import AboutPage from './pages/AboutPage'; // Adjust the path if needed
import ContactPage from './pages/ContactPage'; // Adjust the path if needed
import OrdersPage from './pages/OrdersPage';
import ProductsPage from './pages/ProductsPage';
import ProductImagePage from './pages/ProductImagePage';

function App() {
  return (
    <Router>
      <div className="main" style={{ width: "100vw", justifyContent: "center" }}>
        <PrimarySearchAppBar />
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product-image" element={<ProductImagePage />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
