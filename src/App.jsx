import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />

      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth/register' element={<Register />} />
    </Routes>
  );
}

export default App;
