import './App.css';
import { Routes, Route } from 'react-router-dom';
import Topbar from './Topbar/Topbar';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Mens from './Mens/Mens';
import Womens from './Womens/Womens';
import Kids from './Kids/Kids';
import Featured from './Featured/Featured';
import Joinus from './Register/Joinus';
import Signin from './Register/Signin';

function App() {

  return ( 

    <div className="App">
      <Topbar/>
      <Navbar/>

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Men's" element={<Mens/>}/>
          <Route path="/Women's" element={<Womens/>}/>
          <Route path="/Kid's" element={<Kids/>}/>
          <Route path="/Featured" element={<Featured/>}/>
          <Route path="/Joinus" element={<Joinus/>}/>
          <Route path="/Signin" element={<Signin/>}/>
      </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;
