import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
// import {Animated} from "react-animated-css";
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

import 'tachyons';
import './App.css';
import Flower from './assets/light-pink-flower.png';

function App() {
  
  return (
    <Router>
      <div className="container w-100 vh-100 pa4 center dt">
        <div className="container__image image-left fade-in-image">
            <img src={Flower} alt="flower"/>
        </div>
        <div className="container__content-background b--yellow pa4 dtc v-mid center w-100">
          <div className="container__content-nav bw center w-50-ns w-100-m">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
            </Switch>
            <div className="pl3 pl5-ns pb3 bg-white-40 navigation">
              <Link to="/" className="link dim gray f6 f5-ns dib mr3">About</Link>
              <Link to="/projects" className="link dim gray f6 f5-ns dib mr3">Projects</Link>
              <Link to="/contact" className="link dim gray f6 f5-ns dib">Contact</Link>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
