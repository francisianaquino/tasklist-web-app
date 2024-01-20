import { Route, Routes } from 'react-router-dom';
import LoginForm  from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import ProtectedRoute from './ProtectedRoute';
import Tasklist from '../components/Tasklist';

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/tasklist" element={
        <ProtectedRoute>
          <Tasklist />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default CustomRoutes;