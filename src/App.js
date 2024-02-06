// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import All from './pages/All'
import Fulstackdevelopement from './pages/Fulstackdevelopement'
import Datascience from './pages/Datascience'
import Cybersecurity from './pages/Cybersecurity'
import 'bootstrap/dist/css/bootstrap.css'
import Career from './pages/Career'

export default function Routercomponent() {
  
  return (

    <div className='container'>
      <header className = 'mx-auto d-flex align-items-center col-sm-6 row justify-content-md-center'>
        <div className='header-top'>
          <img id='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmiwZZZUl4BOL9FSLelRPx-4dRubjmIHJAg&usqp=CAU" alt="IT Course Blog" />
          <h1 className='header'>Best IT Course Blog</h1>         
        </div>
      </header> 

      <Router>

        <ul class="nav justify-content-center">
          <li class="nav-item">
            <Link to='/' className='nav-link active'>ALL</Link>
          </li>
          <li class="nav-item">
            <Link to='/Fullstack-Development' className='nav-link '>FULLSTACK DEVELOPMENT</Link>
          </li>
          <li class="nav-item">
            <Link to='/data-science' className='nav-link '>DATA SCIENCE</Link>
          </li>
          <li class="nav-item">
            <Link to='/cyber-security' className='nav-link '>CYBER SECURITY</Link>
          </li>
          <li class="nav-item">
            <Link to='/career' className='nav-link '>CAREER</Link>
          </li>
         
        </ul>
        <Routes>
          <Route path='/' exact Component={All}></Route>
          <Route path='/Fullstack-Development' Component={Fulstackdevelopement}></Route>
          <Route path='/data-science' Component={Datascience}></Route>
          <Route path='/cyber-security' Component={Cybersecurity}></Route>
          <Route path='/career' Component={Career}></Route>

        </Routes>
      </Router>

    </div>









  )
}