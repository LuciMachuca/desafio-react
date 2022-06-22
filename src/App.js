import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home.jsx';
import Detail from './components/detail.jsx';


function App() {
  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
