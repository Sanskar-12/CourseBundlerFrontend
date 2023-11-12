import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Login from './components/Login';
import Register from './components/Register';
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';
import Contact from './components/Contact';
import Request from './components/Request';
import About from './components/About';
import PaymentSuccess from './components/PaymentSuccess';
import PaymentFail from './components/PaymentFail';
import NotFound from './components/NotFound';
import Subscribe from './components/Subscribe';
import CoursePage from './components/CoursePage';
import Profile from './components/Profile';
import UpdateProfile from './components/UpdateProfile';
import ChangePassword from './components/ChangePassword';
import Dashboard from './components/Admin/Dashboard';
import CreateCourse from './components/Admin/CreateCourse';
import AdminCourse from './components/Admin/AdminCourse';
import AdminUsers from './components/Admin/AdminUsers';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { getMyprofileAction } from './redux/actions/userAction';
import { ProtectedRoute } from 'protected-route-react';
import Loader from './components/Loader';

function App() {
  // window.addEventListener('contextmenu',(e)=>{
  //   e.preventDefault()
  // })

  const dispatch = useDispatch();
  const { isAuthenticated, user, message, error, loading } = useSelector(
    state => state.user
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(getMyprofileAction());
  }, [dispatch]);
  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header isAuthenticated={isAuthenticated} user={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/resetpassword/:token" element={<ResetPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request" element={<Request />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/course/:id" element={<CoursePage />} />

            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/paymentfail" element={<PaymentFail />} />
            <Route
              path="/login"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route
              path="/subscribe"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Subscribe />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile user={user}/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/updateprofile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UpdateProfile user={user}/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/changepassword"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ChangePassword />
                </ProtectedRoute>
              }
            />

            {/* Admin Routes */}

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAdmin={user?.role === 'admin'}
                  isAuthenticated={isAuthenticated}
                >
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/createcourse"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAdmin={user?.role === 'admin'}
                  isAuthenticated={isAuthenticated}
                >
                  <CreateCourse />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/courses"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAdmin={user?.role === 'admin'}
                  isAuthenticated={isAuthenticated}
                >
                  <AdminCourse />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAdmin={user?.role === 'admin'}
                  isAuthenticated={isAuthenticated}
                >
                  <AdminUsers />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
          <Toaster />
        </>
      )}
    </Router>
  );
}

export default App;
