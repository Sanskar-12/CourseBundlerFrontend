import React from 'react';
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

function App() {
  // window.addEventListener('contextmenu',(e)=>{
  //   e.preventDefault()
  // })
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfail" element={<PaymentFail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/course/:id" element={<CoursePage />} />

        {/* Admin Routes */}

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/createcourse" element={<CreateCourse />} />
        <Route path="/admin/courses" element={<AdminCourse />} />
        <Route path="/admin/users" element={<AdminUsers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
