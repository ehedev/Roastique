import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// Import CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/global.css';

// Import Context Providers
import { AuthProvider } from './store/AuthContext.jsx';
import { RestaurantProvider } from './store/RestaurantContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RestaurantProvider>
          <App />
        </RestaurantProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);