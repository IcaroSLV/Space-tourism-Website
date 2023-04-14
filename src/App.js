import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';


import './App.css';
import logo from './img/shared/logo.svg'
import menuHangurguer from './img/shared/icon-hamburger.svg'
import iconClose from './img/shared/icon-close.svg'


import Home from './Components/pages/Home'
import Destination from './Components/pages/Destination'
import Crew from './Components/pages/Crew'
import Technology from './Components/pages/Technology'
import Container from './Components/Layout/Container';

  

function App() {

  const [currentPage, setCurrentPage] = useState(1)
  const [menuIsOpen, setmenuisOpen] = useState(false)
  
  const OpenMenu = () => {

  }

  return (
    <BrowserRouter className="app">

      <div className='navbar'>
        <div className='imgContent'>
          <Link  to="/" onClick={() => setCurrentPage(1)}><img src={logo}/></Link>
        </div>
          <button className='buttonHamburguer' onClick={() => OpenMenu()}><img src={menuHangurguer}/></button>
          <div className='linkContainer'>
          <Link  to="/" onClick={() => setCurrentPage(1)}>HOME</Link>
          <Link to="/destination" onClick={() => setCurrentPage(2)}>DESTINATION</Link>
          <Link to="/crew" onClick={() => setCurrentPage(3)}>CREW</Link>
          <Link to="/technology" onClick={() => setCurrentPage(4)}>TECHNOLOGY</Link>
        </div>
      </div>



      <Container className="Container">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/destination' element={<Destination/>}/>
          <Route exact path='/crew' element={<Crew/>}/>
          <Route exact path='/technology' element={<Technology/>}/>
        </Routes>
      </Container>


    </BrowserRouter>
  );
}

export default App;
