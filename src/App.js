import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Foooter';

function App() {
  return (
    <>
    <Router>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </Router>
    <Footer/>

    </>
  );
}

export default App;
