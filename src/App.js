import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Foooter';
import Header from './Components/Header';
import Register from './Components/Register';
import Collecton from './Components/Collecton';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <Router>
    <Header/>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/shop' element={<Collecton/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
    <Footer/>

    </>
  );
}

export default App;
