import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import laptopImg from "./assets/laptop.jpg";
import Dashboard from "./Dashboard";
import About from "./Pages/About";
import AddReview from "./Pages/AddReview";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import Contact from "./Pages/Contact";
import FolioDetails from "./Pages/FolioDetails";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import Not from "./Pages/Not";
import Portfolios from "./Pages/Portfolios";
import Reviews from "./Pages/Reviews";
import Services from "./Pages/Services";
import Header from "./Shared/Header";
import Menu from "./Shared/Menu";

const mainBackgorund = {
  minHeight: "100vh",
  background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${laptopImg}) top left no-repeat`,
  backgroundAttachment: "fixed",
};
const openPageStyle = {
  minHeight: "100vh",
  background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${laptopImg}) top left no-repeat`,
  backgroundAttachment: "fixed",
  backdropFilter: "blur(16.1px)",
  // -webkit-backdrop-filter: blur(16.1px);
};
const App = () => {
  const [openMmenu, setOpenMenu] = useState(false);
  const [openSpinner, setOpenSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setOpenSpinner(false);
    }, 4000);
  }, []);
  const auth = localStorage.getItem("portfolio");

  return (
    <>
      {openSpinner ? (
        <div
          className="flex items-center justify-center min-h-screen"
          style={openPageStyle}
        >
          <div class="spinner text-8xl font-bold rounded text-gray-100 bg-black border-8 border-gray-50 ">
            G
          </div>
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
                <Route path="/reviews">
                  <div className="animationPageOpen">
                    <Reviews />
                  </div>
                </Route>
                <Route path="/blog">
                  <div className="animationPageOpen">
                    <Blog />
                  </div>
                </Route>
                <Route path="/add_review">
                  <div className="animationPageOpen">
                    <AddReview />
                  </div>
                </Route>
                <Route path="/blogd/:blogId">
                  <div className="animationPageOpen">
                    <BlogDetails />
                  </div>
                </Route>
                {auth === "coderboygalif@gmail.com" ? (
                  <Route path="/personal/dashboard">
                    <Dashboard />
                  </Route>
                ) : (
                  <Route path="/login">
                    <Login />
                  </Route>
                )}
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
