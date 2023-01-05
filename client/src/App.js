import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Pages/Home';
import Free from './Components/Free/Free';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Free/>
      <Header/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </Router>
      <hr className='text-light mt-3'/>
      <Footer/>
    </div>
  );
}

export default App;
