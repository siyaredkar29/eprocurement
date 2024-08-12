import { useState, useEffect } from "react";

import "./Navbar.css";
import logo from "../../assets/LOGO (1).png";
import assembly from "../../assets/goa assembly.jpg";
import govgoa from "../../assets/goalogo2.png";
import home from "../../assets/home.svg";
import contact from "../../assets/contact.svg";
import map from "../../assets/map.svg";
import { Link } from 'react-router-dom';


const date = new Date();
const day = date.getDate();
const year = date.getFullYear();

const monthNames = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
const monthString = monthNames[date.getMonth()];

const Navbar = () => {
  const [currt, setcurrt] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setcurrt(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  let hour = currt.getHours();
  let min = currt.getMinutes();

  if (hour > 12) var hr = hour - 12;
  else hr = hour;

  const formattedDate = `${day}  ${monthString} ${year}`;
  var time;
  if (hour >= 12) {
    time = `${hr<10 ? "0" + hr : hr} : ${min < 10 ? "0" + min : min} PM`;
  } else {
    time = `${hr<10 ? "0" + hr : hr} : ${min < 10 ? "0" + min : min} AM`;
  }
  return (
    <nav>
      <ul className="logos">
        <div className="nav-left-logo">
          <li>
            <a href="https://eprocure.goa.gov.in/nicgep/app">
              <img src={logo} alt="" />
            </a>
          </li>
        </div>

        <div className="nav-center-logo">
          <li>
            <a href="https://www.goavidhansabha.gov.in/">
              <img src={assembly} alt="" />
            </a>
          </li>
        </div>

        <div className="nav-right-logo">
          <li>
          <a href="https://www.goa.gov.in/">
              <img src={govgoa} alt="" />
            </a>
          </li>
        </div>
      </ul>
      <div className="blue"></div>
      <ul>
        
        <div className="nav-left">
          <li>{formattedDate}</li>
        </div>

        <div className="nav-center">
  <li>
    <Link to="/">
      <img className="nav-icon" src={home} alt="Home" />
      HOME
    </Link>
  </li>
  <li>
    <Link to="/contactus">
      <img className="nav-icon" src={contact} alt="Contact Us" />
      CONTACT US
    </Link>
  </li>
  <li>
    <Link to="/site-map">
      <img className="nav-icon" src={map} alt="Site Map" />
      SITE MAP
    </Link>
  </li>
</div>

        <div className="nav-right">
          <li>{time}</li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;