// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import {Router, Route, PrivateSet} from '@redwoodjs/router'

import { useAuth } from './auth'
import LoginPage from "src/pages/LoginPage/LoginPage";
import SignupPage from "src/pages/SignupPage/SignupPage";
import ForgotPasswordPage from "src/pages/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "src/pages/ResetPasswordPage/ResetPasswordPage";
import NotFoundPage from "src/pages/NotFoundPage/NotFoundPage";

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/" page={HomePage} name="home" />
      <PrivateSet unauthenticated={'login'}>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </PrivateSet>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
