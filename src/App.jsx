import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from "./components/pages/SignUp";
import LoginPage from "./components/pages/Login";
import HomePage from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import About from './components/About/about';
import MCQ from './components/test/MCQ/mcq';
import Profile from './components/Profile/profile';
import Coding from './components/test/coding/codeing';
import VirtualInterview from './components/interview/virtual_interview/virtual_interview';
import Chat from './components/interview/chat/chat';
import ProtectedRoute from "./ProtectedRoute";
import Pagenotfound from './components/error/page';
import AdminDashboard from './components/Admin/adminDashboard';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/dashboard/about" element={<About />} />
        <Route path="/dashboard/mcq" element={<ProtectedRoute><MCQ /></ProtectedRoute>} />
        <Route path="/dashboard/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/dashboard/coding" element={<ProtectedRoute><Coding /></ProtectedRoute>} />
        <Route path="/dashboard/virtual_interview" element={<ProtectedRoute><VirtualInterview /></ProtectedRoute>} />
        <Route path="/dashboard/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;