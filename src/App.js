import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  
} from "react-router-dom";

import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import useApi from "./Hooks/useApi";

function App() {

  /* const api = useApi()

  api.get ("user/appData")
    .then((res) => {
      console.log ("api data >>>", res);

    })
    .catch ((err)=> {
      console.log ("app data >>>", err);
    }) */
  return (
    <div className="App">
      <Header/>
      <HashRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>

        </Routes>
      </HashRouter>
      <Footer/>
    </div>
  );
}

export default App;
