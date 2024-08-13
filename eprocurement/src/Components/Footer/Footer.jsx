import { Footer } from "antd/es/layout/layout";
import "./Footer.css";
import { incrementVisitorCount, getVisitorCount } from '../../Components/firebase';
import { useEffect, useState } from "react";
import Link from "antd/es/typography/Link";

const Footerr = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Increment the visitor count on page load
    incrementVisitorCount();

    // Fetch and display the current visitor count
    getVisitorCount((count) => {
      setVisitorCount(count);
    });
  }, []);
  return (
    <div>
      <Footer className="footer1">
        Visitor no.: {visitorCount}<br />
        Contents owned and maintained by Government of Goa
      </Footer>
      <Footer className="footer2">
        <Link className="fele">
          <a href="https://www.nic.in/" target="_blank">
            <img src="https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2Fnic.png?alt=media&token=c100f099-e33d-477c-b88a-60f07559024c" alt="" />
          </a>
        </Link>
        <Link className="fele">
          <a href="">
            <img src="https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2Findiagov.png?alt=media&token=92024e29-b26e-4946-bd38-89ec081f9a9c" alt="" />
          </a>
        </Link>
        <Link className="fele">
          <a href="">
            <img src="https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2Fstocc.png?alt=media&token=e2aec6c0-e38c-4067-86e3-31390b588fa2" alt="" />
          </a>
        </Link>
        <Link className="fele">
          <a href="">
            <img src="https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2Fgoagov.png?alt=media&token=718dbb76-5196-4e80-9c6d-5d3b7451406a" alt="" />
          </a>
        </Link>
        <Link className="fele">
          <a href="">
            <img src="https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2Fgemcppp.svg?alt=media&token=cb5f13d9-936c-4b99-b397-51cbbe05e296" alt="" />
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