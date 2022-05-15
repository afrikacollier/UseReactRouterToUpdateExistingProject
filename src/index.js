import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './components/BoardFunctional';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation} from "react-router-dom";




/* This is going to be the main thing we display on our page. */
function MyRoutes(props) {
  return (
    <Router>
      <div>
        <Navbar/>
        <hr />
        <Routes>
          <Route path="/" element={<Board/>}/>
          <Route path="/edit" element={<Edit/>}/>
          <Route path="/delete" element={<Delete/>}/>
        </Routes>
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <React.StrictMode>
      <MyRoutes />
    </React.StrictMode>
);

