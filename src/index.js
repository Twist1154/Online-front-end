// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/CartContext'; 
import './index.css'; // Import global styles if you have any (optional)

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <CartProvider> 
        <App />
      </CartProvider>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found. Ensure there is a div with id="root" in your index.html.');
}
