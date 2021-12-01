import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import About from "./Pages/About";
import FolioDetails from "./Pages/FolioDetails";
import Home from "./Pages/Home/Home";
import Portfolios from "./Pages/Portfolios";
import Header from "./Shared/Header";
import Menu from "./Shared/Menu";

const App = () => {
  const [openMmenu, setOpenMenu] = useState(false);
  return (
    <div className="bg-black min-h-screen animationPageOpen">
      <BrowserRouter>
         <Header openMmenu={openMmenu} setOpenMenu={setOpenMenu}/>
         { openMmenu === true ? 
           <div className="animationPageOpen">
             <Menu setOpenMenu={setOpenMenu}/>
           </div>
           :
           <Switch>
             <Route exact path="/">
               <div className="animationPageOpen"><Home /></div>
             </Route>
             <Route path="/home">
               <div className="animationPageOpen"><Home /></div>
             </Route>
             <Route path="/portfolio">
               <div className="animationPageOpen"><Portfolios/></div>
             </Route>
             <Route path="/portfolios/:id">
               <div className="animationPageOpen"><FolioDetails/></div>
             </Route>
             <Route path="/about">
                <div className="animationPageOpen"><About/></div>
             </Route>
           </Switch>
         }
      </BrowserRouter>
    </div>
  );
};

export default App;
