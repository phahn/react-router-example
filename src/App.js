import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ReportRoute from './pages/report/ReportRoute'
import Home from './pages/home/Home'
import Command from './pages/command/Command'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/commands">Commands</Link>
        </li>
        <li>
          Reports
          <ul>
            <li>
              <Link to={`/reports/PART`}>PART</Link>
            </li>
            <li>
              <Link to={`/reports/PART?PART=LAPTOP_1`}>PART with Filter 1</Link>
            </li>
            <li>
              <Link to={`/reports/PART?PART=LAPTOP_2`}>PART with Filter 2</Link>
            </li>
            <li>
              <Link to={`/reports/DEPOT`}>DEPOT</Link>
            </li>
          </ul>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/commands" component={Command} />
      <Route path="/reports/:reportId" component={ReportRoute} />

    </div>
  </Router>
);
export default BasicExample;
