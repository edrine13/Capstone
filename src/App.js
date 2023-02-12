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
import UserPage from "./page/UserPage";
import AdminPage from "./page/AdminPage";
import Aside from "./components/user/aside/Aside";
import Admin from "./components/admin/Admin";
import UserManagementPage from "./page/UserManagementPage";

function App() {
  AOS.init();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/user" element={<UserPage Aside={<Aside />} />} />
        <Route path="/admin/*" element={<AdminPage Aside={<Aside />} />}>
          <Route index element={<Navigate to={"overview"} />} />
          <Route path="overview" element={<Admin />} />
          <Route path="user-management" element={<UserManagementPage />} />
        </Route>
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
