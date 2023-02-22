import './App.css';
import { RouterProvider } from 'react-router-dom';

import AOS from 'aos';
import useCreatedRoutes from './store/routes/routes';
import 'aos/dist/aos.css';

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
