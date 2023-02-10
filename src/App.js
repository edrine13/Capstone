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
import { LoanProduct } from "./components/loanproducts/LoanProduct";
import { Login } from "./components/login/Login";

function App() {
  AOS.init();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="/LoanProduct" element={<LoanProduct />} />
        <Route path="/Login" element={<Login />} />
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
