import logo from './logo.svg';
import './App.css';
import {Home} from './components/Home/Home'
import {Login} from './components/Login/Login'
import { Classes } from './components/Classes/Classes';
import { Routes, Route } from 'react-router-dom';
import {PrivateRoute} from './PrivateRoute/PrivateRoute'

function App() {
  return (
    <div className="App">
      <h1>Masai School</h1>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} ></Route>
        <Route path="/page=:2" element={<PrivateRoute><Home/></PrivateRoute>} ></Route>
        <Route path="/page=:3" element={<PrivateRoute><Home/></PrivateRoute>} ></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Classes/:id" element={<Classes/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
