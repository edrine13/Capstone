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
import LoginPage from "./page/LoginPage";
import SignUpPage from "./page/SignUpPage";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
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
