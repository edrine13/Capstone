<<<<<<< HEAD
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
=======
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./page/About";
import AOS from "aos";
import "aos/dist/aos.css";
>>>>>>> 73f4a50e92c625db7a72bd9d9f92d51e8e168583

function App() {
  AOS.init();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
      </Route>
    )
  );
  return (
<<<<<<< HEAD
    <div>
      <Header />

      <Footer />
    </div>
=======
    <>
      <RouterProvider router={router} />
    </>
>>>>>>> 73f4a50e92c625db7a72bd9d9f92d51e8e168583
  );
}

export default App;
