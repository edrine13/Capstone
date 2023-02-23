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
import ContributionManagementPage from '../../page/ContributionManagementPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';
import LoanManagementPage from '../../page/LoanManagementPage';
import FaqsPage from '../../page/FaqsPage';
import PrivacyPage from '../../page/PrivacyPage';
import TermsPage from '../../page/TermsPage';
import Error404Page from '../../page/Error404Page';
import UserProfilePage from '../../page/UserProfilePage';
import UserLoanPage from '../../page/UserLoanPage';
import UserContributionPage from '../../page/UserContributionPage';
import User from '../../components/user/User';
import UserOverviewPage from '../../page/UserOverviewPage';
import EditUserForm from '../../components/admin/user_Management/edit/EditUserForm';

const useCreatedRoutes = () => {
  const isLoggedIn = useContext(authContext).isLoggedIn;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="faqs" element={<FaqsPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/edit" element={<EditUserForm />} />
        {isLoggedIn ? (
          <Route
            path="/members/*"
            element={<UserPage AsideUser={<AsideUser />} />}
          >
            <Route index element={<Navigate to={'overview'} />} />
            <Route path="overview" element={<UserOverviewPage />} />
            <Route path="profile" element={<UserProfilePage />} />
            <Route path="loans" element={<UserLoanPage />} />
            <Route path="contribution" element={<UserContributionPage />} />
          </Route>
        ) : null}
        {isLoggedIn ? (
          <Route path="/admin/*" element={<AdminPage Aside={<Aside />} />}>
            <Route index element={<Navigate to={'overview'} />} />
            <Route path="overview" element={<Admin />} />
            <Route path="user-management" element={<UserManagementPage />} />
            <Route
              path="contribution-management"
              element={<ContributionManagementPage />}
            />
            <Route path="loan-management" element={<LoanManagementPage />} />
          </Route>
        ) : null}
        <Route path="*" element={<Error404Page />} />
      </Route>
    )
  );

  return router;
};

export default useCreatedRoutes;
