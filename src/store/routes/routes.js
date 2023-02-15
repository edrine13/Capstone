import React, { useContext } from 'react';
import Layout from '../../components/Layout/Layout';
import About from '../../page/About';
import LoginPage from '../../page/LoginPage';
import SignUpPage from '../../page/SignUpPage';
import UserPage from '../../page/UserPage';
import AsideUser from '../../components/user/aside/AsideUser';
import Aside from '../../components/admin/aside/Aside';
import authContext from '../context/auth-context';
import AdminPage from '../../page/AdminPage';
import Admin from '../../components/admin/Admin';
import UserManagementPage from '../../page/UserManagementPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';

const useCreatedRoutes = () => {
  const isLoggedIn = useContext(authContext).isLoggedIn;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        {isLoggedIn ? (
          <Route path="/members/*" element={<UserPage Aside={<AsideUser />} />}>
            <Route index element={<Navigate to={'overview'} />} />
            <Route path="profile" element={null} />
          </Route>
        ) : null}
        {isLoggedIn ? (
          <Route path="/admin/*" element={<AdminPage Aside={<Aside />} />}>
            <Route index element={<Navigate to={'overview'} />} />
            <Route path="overview" element={<Admin />} />
            <Route path="user-management" element={<UserManagementPage />} />
          </Route>
        ) : null}
      </Route>
    )
  );

  return router;
};

export default useCreatedRoutes;
