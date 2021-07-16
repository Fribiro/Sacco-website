import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './components/homepage/Homepage'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faMapMarkerAlt,
  faPaperPlane,
  faPhoneAlt,
  faUsers,
  faHandshake,
  faHandsHelping,
  faHistory,
  faGift,
  faLandmark,
  faUser,
  faEnvelope,
  faFilePdf,
  faBalanceScale,
  faShieldAlt,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

import Contact from './components/contacts/Contact';
import Loancalculator from './components/loancalculator/Loancalculator';
import About from './components/about/About';
import AssetFinanceMain from './components/loantypes/AssetFinance';
import Emergency from './components/loantypes/Emergency';
import Education from './components/loantypes/Education';
import Development from './components/loantypes/Development';
import Normal from './components/loantypes/Normal';
import AboutContent from './components/about/AboutContent.style';
import Board from './components/about/Board.style';
import Membership from './components/about/Membership.style';

library.add(
  fab,
  faBars,
  faPhoneAlt,
  faPaperPlane,
  faMapMarkerAlt,
  faUsers,
  faHandshake,
  faHandsHelping,
  faHistory,
  faGift,
  faLandmark,
  faUser,
  faEnvelope,
  faFilePdf,
  faBalanceScale,
  faShieldAlt,
  faClipboardList,
);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route exact path="/about" component={About} /> */}
          <Route exact path="/who-we-are" component={AboutContent} />
          <Route exact path="/board-of-directors" component={Board} />
          <Route exact path="/sacco-membership" component={Membership} />
          <Route exact path="/contacts" component={Contact} />
          <Route exact path="/loan-calculator" component={Loancalculator} />
          <Route exact path="/asset-finance" component={AssetFinanceMain} />
          <Route exact path="/emergency-loan" component={Emergency} />
          <Route exact path="/education-loan" component={Education} />
          <Route exact path="/development-loan" component={Development} />
          <Route exact path="/normal-loan" component={Normal} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
