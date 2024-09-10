
import React from 'react';
import Home from './Pages/Home';
import Company from './Pages/Company';
import {Routes,Route} from 'react-router-dom'
import AddCompany from './Pages/AddCompany';
import Update from './Pages/Update'
const App = () => {
  return (
   <>
   <Routes>
    {/* <Route path = "" element = {<Home/>}/> */}
    <Route path = "/" element = {<Company/>}/>
    <Route path = "/adduser" element = {<AddCompany/>}/>
    <Route path = "/updateuser" element = {<AddCompany/>}/>
   </Routes>
      
   </>
  );
}

export default App;

