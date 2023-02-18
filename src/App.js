import React, { useContext } from 'react';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import useCreatedRoutes from './store/routes/routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  const router = useCreatedRoutes();
  AOS.init();
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
