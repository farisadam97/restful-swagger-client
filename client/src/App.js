import React from 'react';
import { useState } from "react";
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'
import  Signup from "./pages/signup/signup.page";
import  Home from "./pages/home/home.page";
import  Search from "./pages/search/search.page";
import  Edit from "./pages/edit/edit.page";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const App = ()=>{

  const [user,setUser] = useState([
    {
      id:1,
      username : 'test',
      email : 'test@test.com',
      password : 'test' 
    }
  ])

  const [tmpUser,setTmpUser] = useState({
      username : '',
      email : '',
      password : '',
  })

  const submitData = () => {
    setUser([
      ...user,
      {
        id: Date.now(),
        username : tmpUser.username,
        email : tmpUser.email,
        password : tmpUser.password,
      }
    ])
    
    setTmpUser({
        username : '',
        email : '',
        password : '',
    })
    console.log("After Submit",user)
  }

  const onEdit = (indexUser,data) => (e) => {
    console.log(indexUser,data)
  }

  return(
    
    <BrowserRouter>
      <Box sx={{
        width:'50vw',
        height:'36px',
        mx:'auto',
        mb:2,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Link to={`/`} style={{  textDecoration: 'none'}}>
          <Button size="small">
              Home
          </Button>                    
        </Link>
        <Link to={`/signup`} style={{  textDecoration: 'none'}}>
          <Button size="small">
              Sign Up
          </Button>                    
        </Link>
        <Link to={`/search`} style={{  textDecoration: 'none'}}>
          <Button size="small">
              Search
          </Button>                    
        </Link>
      </Box>

      <Routes>
        <Route path="/" element={<Home user={user} />}></Route>
        <Route path="/signup" element={<Signup onSubmit={submitData} setTmpUser={setTmpUser}  tmpUser={tmpUser}/>}></Route>
        <Route path={`/edit/:idUser`} element={<Edit user={user} setTmpUser={setTmpUser}  tmpUser={tmpUser} onEdit={onEdit} />}></Route>  
        
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
