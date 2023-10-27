import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Pages/Main';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Components/AuthContext';
import { ThemeProvider,  } from './Components/ThemeContext';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
            <Main />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>
);


