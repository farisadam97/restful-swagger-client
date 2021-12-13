import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  Signup from "./pages/signup/signup.page";
import  Search from "./pages/search/search.page";
import  Edit from "./pages/edit/edit.page";

const App = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
