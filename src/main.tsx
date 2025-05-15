import './index.css';

import App from './App.tsx';
import { RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import router from './routes/Router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </StrictMode>
);
