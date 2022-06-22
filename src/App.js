import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import Detail from './components/detail.jsx';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/detail" element={<Detail />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
