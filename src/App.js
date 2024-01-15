import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { CartProvider } from './Components/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Foooter';
import Header from './Components/Header';
import Register from './Components/Register';
import Collecton from './Components/Collecton';
import Contact from './Components/Contact';
import Product from './Components/Product';
import Showcase from './Components/Showcase';
import SearchPage from './Components/SearchPage';
import CartPage from './Components/CartPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <CartProvider>
      <Router>
      <Header/>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/shop' element={<Collecton/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/shop/product' element={<Product/>}></Route>
          <Route path='/showcase' element={<Showcase/>}></Route>
          <Route path='/cart' element={<CartPage/>}></Route>
          <Route path='/search' element={<SearchPage/>}></Route>
        </Routes>
      </Router>
      <Footer/>
      <ToastContainer
      limit={5}
      />
    </CartProvider>
  );
}

export default App;
