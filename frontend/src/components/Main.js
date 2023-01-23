import React from 'react';
import '../style/Main.css';
import Sidebar from './Sidebar';
import '../style/Details.css';
import Events from './Events';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from './Content';

const Main = () => {
  return (
    <div className='main'>
      <div className='sidebar'><Sidebar /></div>
      <Router>
      <Routes>
          <Route path="/"element={<div className='content'>Hello World</div>}/>
        </Routes>
        <Routes>
          <Route path="/detail/:key"element={<div className='content'><Content /></div>}/>
        </Routes>
      <div className='menu'><Events /></div>
      </Router>
    </div>
  )
}

export default Main;