import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import './Footer.css';

const Footer = () => {
  return <div className="footer">
    <div className="footer-container">
      <div className="col-sm-4">
        <h4>Address</h4>
        <div className="textwidget">
          <p>308 SW 1st Ave, Ste 055</p>
          <p>Portland, OR 97204</p>
          <p>USA</p>
          <p>E: support@prospus.com</p>
        </div>
      </div>
      <div className="col-sm-4">
        <h4>Services</h4>
        <div class="textwidget">
          <p>R&amp;D and Consulting</p>
          <p>Project Management</p>
          <p>Architecture</p>
          <p>Design, UX, &amp; UI</p>
          <p>Development</p>
          <p>QA &amp; Testing</p>
          <p>DevOps</p>
          <p>Technical Support</p>
          <p>Infra Management</p>
        </div>
      </div>
      <div className="col-sm-4">
        <h4>Info</h4>
        <div class="textwidget">
        <Router>
          <ul className="nav">
            <li className="nav-item"><Route path='/about' component={ About } /></li>
            <li className="nav-item"><Route path='/' component={ Press } /></li>
            <li className="nav-item"><Route path='/policy' component={ Policy } /></li>
            <li className="nav-item"><Route path='/terms' component={ Terms } /></li>
          </ul>
        </Router>
        </div>
      </div>
    </div>
  </div>
}

const About = (props) => <div>
  <br />
  <Link to='/address'>Twitter Feed</Link>&nbsp;
  <Link to='/address/instagram'>Instagram Feed</Link>
  <h1>We are located at 555 Jackson St.</h1>
  {props.children}
</div>
const Press = () => <h1>Press Center</h1>
const Policy = () => <h1>Privacy Policy</h1>
const Terms = () => <h1>Terms of Use</h1>
export default Footer;
