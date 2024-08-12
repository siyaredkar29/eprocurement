import { Footer } from "antd/es/layout/layout";
import "./Footer.css";
import Link from "antd/es/typography/Link";

const Footerr = () => {
  return (
    <div>
      <Footer className="footer1">
        Visitor no.: 13579 <br />
        Contents owned and maintained by Government of Goa
      </Footer>
      <Footer className="footer2">
        <Link className="fele">
          <a href="https://www.nic.in/" target="_blank">
            <img src="/src/assets/nic.png" alt="" />
          </a>
        </Link>
        <Link className="fele">
          <a href="">
            <img src="/src/assets/indiagov.png" alt="" />
          </a>
        </Link>
        <Link className="fele">
          <a href="">
            <img src="/src/assets/stocc.png" alt="" />
          </a>
        </Link>
        <Link className="fele">
          <a href="">
            <img src="/src/assets/goagov.png" alt="" />
          </a>
        </Link>
        <Link className="fele">
          <a href="">
            <img src="/src/assets/gemcppp.svg" alt="" />
          </a>
        </Link>

        <div className="footer3">
          <div>
            Designed, Developed and Hosted by
            <br />
            <strong>National Informatics Centre</strong>
          </div>
          <div>
            National Informatics Centre Version: 1.09.20 10-Jan-2024
            <br />
            &copy; 2017 Tenders NIC, All rights reserved.
          </div>
          <div>
            <a href="#"><b>Portal Policies</b></a>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Footerr;