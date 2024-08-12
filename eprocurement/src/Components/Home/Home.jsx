
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Mobmenu from "../Mobmenu/Mobmenu";

import Footerr from "../Footer/Footer";

import Searchh from "../Search/Search";
import Loading from "../Loading/Loading";
import { useState,useEffect } from "react";





const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const f = async () => {

      setLoading(true)
      setTimeout(()=>{setLoading(false)},2500)
    };
    f();
  }, []);
  return (
    <>
    <Loading loading={loading}>
    <div>
      <Navbar/>
      <Sidebar />
    </div>
    <Searchh/>
    <div className='mob'>
      <Mobmenu/>
      
    </div>

    <div>
      <Footerr/>
    </div>

    
    </Loading>
    </>
  );
};

export default Home;
