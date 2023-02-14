import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./page/About";
import LoginPage from "./page/LoginPage";
import SignUpPage from "./page/SignUpPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { LoanProduct } from "./components/loanproducts/LoanProduct";
import { Login } from "./components/login/Login";
import Faqs from "./components/FAQ'S/Faqs";
import Privacy from "./components/privacy/Privacy";

function App() {
  AOS.init();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/privacy" element={<Privacy />} />
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
