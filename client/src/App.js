import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Header from './Components/Header/Header';
import Free from './Components/Free/Free';
import Forgot from './Pages/Forgot';

function App() {
  return (
    <div className="App">
      <Router>
        <Free/>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/account/login' element={<Login/>}/>
          <Route exact path='/account/forgot' element={<Forgot/>}/>
          <Route exact path='/account/register' element={<Register/>}/>
          <Route exact path='/product/:slug' element={<Product/>}/>
        </Routes>
      </Router>
      <hr className='text-light mt-3'/>
      <Footer/>
    </div>
  );
}

export default App;
