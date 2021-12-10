import React from "react";
import  "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./Navbar/Navbar";
import Demo from "./Pages/Demo";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Keyfeature from "./Pages/Keyfeatures";
import Testimonial from "./Pages/Testimonial";

function App() {
  return (
    <div className="Container">
      <Router>
          <NavBar/>
          <Route path ="/home" exact component={Home}></Route>
          <Route path ="/demo" exact component={Demo}></Route>
          <Route path ="/pricing" component={Pricing}></Route>
          <Route path ="/keyfeature"  component={Keyfeature}></Route>
          <Route path ="/Testimonial"  component={Testimonial}></Route>
      </Router>
     
    </div>
  );
}

export default App;
