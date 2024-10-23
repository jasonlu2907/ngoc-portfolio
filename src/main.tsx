import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { HashRouter } from 'react-router-dom';
// import MyWorks from './components/MyWorks';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <div>404: Not Found</div>,
//   },
//   {
//     path: '/myworks',
//     element: <MyWorks />,
//   },
// ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
