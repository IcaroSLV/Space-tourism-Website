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

  const [menuIsOpen, setmenuisOpen] = useState(false)

  function ClickonPage(e) {

    setmenuisOpen(false)
  }

  return (
    <BrowserRouter className="app">

      <div className='navbar'>
        <div className='imgContent'>
          <Link  to="/"><img src={logo}/></Link>
        </div>
          <button className='buttonHamburguer' onClick={() => setmenuisOpen(!menuIsOpen)}><img src={menuHangurguer}/></button>
          <div className={menuIsOpen? "HamburguerMenu" : "linkContainer"}>
          <Link  to="/" onClick={() => ClickonPage(1)}>HOME</Link>
          <Link to="/destination" onClick={() => ClickonPage(2)} >DESTINATION</Link>
          <Link to="/crew" onClick={() => ClickonPage(3)}>CREW</Link>
          <Link to="/technology" onClick={() => ClickonPage(4)}>TECHNOLOGY</Link>
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
