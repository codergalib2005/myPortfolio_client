import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import laptopImg from "./assets/laptop.jpg";
import openBannerImg from "./assets/open-banner.png";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import FolioDetails from "./Pages/FolioDetails";
import Home from "./Pages/Home/Home";
import Not from "./Pages/Not";
import Portfolios from "./Pages/Portfolios";
import Services from "./Pages/Services";
import Header from "./Shared/Header";
import Menu from "./Shared/Menu";

const mainBackgorund = {
  minHeight: "100vh",
  background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${laptopImg}) top left no-repeat`,
  backgroundAttachment: "fixed",
};
const openPageStyle = {
  background: ` linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),url(${openBannerImg}) center center no-repeat`,
  backgroundSize: "cover",
};
const App = () => {
  const [openMmenu, setOpenMenu] = useState(false);
  const [openSpinner, setOpenSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setOpenSpinner(false);
    }, 4000);
  }, []);

  return (
    <>
      {openSpinner ? (
        <div
          className="flex items-center justify-center min-h-screen"
          style={openPageStyle}
        >
          <div class="spinner"></div>
        </div>
      ) : (
        <div className="min-h-screen animationPageOpen" style={mainBackgorund}>
          <BrowserRouter>
            <Header openMmenu={openMmenu} setOpenMenu={setOpenMenu} />
            {openMmenu === true ? (
              <div className="animationPageOpen">
                <Menu setOpenMenu={setOpenMenu} />
              </div>
            ) : (
              <Switch>
                <Route exact path="/">
                  <div className="animationPageOpen">
                    <Home />
                  </div>
                </Route>
                <Route path="/home">
                  <div className="animationPageOpen">
                    <Home />
                  </div>
                </Route>
                <Route path="/portfolio">
                  <div className="animationPageOpen">
                    <Portfolios />
                  </div>
                </Route>
                <Route path="/portfolios/:portfolioId">
                  <div className="animationPageOpen">
                    <FolioDetails />
                  </div>
                </Route>
                <Route path="/about">
                  <div className="animationPageOpen">
                    <About />
                  </div>
                </Route>
                <Route path="/contact">
                  <div className="animationPageOpen">
                    <Contact />
                  </div>
                </Route>
                <Route path="/services">
                  <div className="animationPageOpen">
                    <Services />
                  </div>
                </Route>
                <Route path="/blog">
                  <div className="animationPageOpen">
                    <Blog />
                  </div>
                </Route>
                <Route path="*">
                  <div className="animationPageOpen">
                    <Not />
                  </div>
                </Route>
              </Switch>
            )}
          </BrowserRouter>
        </div>
      )}
    </>
  );
};

export default App;
