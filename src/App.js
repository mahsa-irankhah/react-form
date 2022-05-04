import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

//components
import Register from './Register';
import Login from "./Login";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/register" />} />
    </Routes>
  );
}

export default App;
