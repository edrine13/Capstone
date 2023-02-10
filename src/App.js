import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './page/About';
import Dashboard from './page/Dashboard';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="/user" element={<Dashboard />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
