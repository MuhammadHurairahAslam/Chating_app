
import Home from './pages/Home';
import Registeration from './pages/Registeration';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import './style.scss'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={< Registeration />}></Route>
      <Route exact path='/login' element={< Login />}></Route>
      <Route exact path='/home' element={< Home />}></Route>
      </Routes>
    </BrowserRouter>);
}

export default App;
