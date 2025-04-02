import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/gitprofile.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GitProfile config={CONFIG} />
    </BrowserRouter>
  </React.StrictMode>,
);
