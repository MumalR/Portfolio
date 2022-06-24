import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./Comp/Navbar";
import "./App.css"
import Home from "./Comp/Pages/Home.js";
import About from "./Comp/Pages/About.js";
import Work from "./Comp/Pages/Work.js";
import Payroll from "./Comp/Pages/Payroll.js";
import CV from "./Comp/Pages/cv.pdf";

function App () {
  return (
      <>
        <Router>
          <Navbar />
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/about'  component={ About }/>
              <Route path='/cv'  component={ CV }/>
              <Route path='/work'  component={ Work }/>
              <Route path='/payroll'  component={ Payroll }/>
             <Home/>
            </Switch>
        </Router>
        
      </>
  );
};

export default App;
