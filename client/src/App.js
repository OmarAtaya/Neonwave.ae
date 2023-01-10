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
import Account from './Pages/Account';
import Cart from './Pages/Cart';
import Search from './Pages/Search';
import Shopall from './Pages/Shopall';
import TextBased from './Pages/TextBased';
import Anime from './Pages/Anime';
import Best from './Pages/Best';
import ScrollToTop from './ScrollToTop';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Fonts from './Pages/Fonts';
import FAQ from './Pages/FAQ';
import Size from './Pages/Size';
import Shipping from './Pages/Shipping';
import Custom from './Pages/Custom';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Free/>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/account/login' element={<Login/>}/>
          <Route exact path='/account/forgot' element={<Forgot/>}/>
          <Route exact path='/account/profile' element={<Account/>}/>
          <Route exact path='/account/register' element={<Register/>}/>
          <Route exact path='/search' element={<Search/>}/>
          <Route exact path='/collections/shop-all' element={<Shopall/>}/>
          <Route exact path='/collections/text-based' element={<TextBased/>}/>
          <Route exact path='/collections/anime' element={<Anime/>}/>
          <Route exact path='/collections/best-seller' element={<Best/>}/>
          <Route exact path='/product/:slug' element={<Product/>}/>
          <Route exact path='/contact-us' element={<Contact/>}/>
          <Route exact path='/about-us' element={<About/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/fonts-product-size-guide' element={<Fonts/>}/>
          <Route exact path='/faqs' element={<FAQ/>}/>
          <Route exact path='/size-guide' element={<Size/>}/>
          <Route exact path='/shipping-returns' element={<Shipping/>}/>
          <Route exact path='/custom' element={<Custom/>}/>
        </Routes>
      </Router>
      <hr className='text-light mt-3'/>
      <Footer/>
    </div>
  );
}

export default App;
