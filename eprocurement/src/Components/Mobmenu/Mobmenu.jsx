import Card from "antd/es/card/Card";
import { Meta } from "antd/es/list/Item";
import "./Mobmenu.css";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../../Authentication";
import { useEffect, useState } from "react";
import { message } from "antd";
import Loading from "../Loading/Loading";
const Mobmenu = () => {
  const navigate = useNavigate();
  const navigateTo = (val) => navigate(val);

  const [AUTH, SETAUTH] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const f = async () => {

      setLoading(true)
      SETAUTH(await isAuth());
      setTimeout(()=>{setLoading(false)},2500)
    };
    f();
  }, []);

  const func2 = (info, path) => {
    return (
      <>
        <Card hoverable className="card" onClick={() => navigateTo(path)}>
          <Meta title={info} />
        </Card>
      </>
    );
  };

  const handleSignOut = () => {
    
    return (
      <>
        <Card hoverable className="card" onClick={() => {
          SETAUTH(false);
          localStorage.removeItem("token");
          message.info("Sign out Successfull", 4);
        }}>
          <Meta title='SIGNOUT' />
        </Card>
      </>
    );
  };
  return (
    <>

    <Loading loading={loading}>

      <h2>Menu</h2>
      <div className="maincard">
        {AUTH && !loading ?   handleSignOut(): func2("LOGIN", "/login")}
        {func2("Tenders by location", "/")}
        {func2("Tenders by Organisation", "/")}
        {func2("Tenders by Classification", "/")}
        {func2("Tenders in Archive", "/")}
        {func2("Tenders Status", "/")}
        {func2("Cancelled/Retendered", "/")}
        {func2("Downloads", "/")}
        {func2("Announcements", "/")}
        {func2("Debartment List", "/")}
        {func2("Awards", "/")}
        {func2("Site Compatability", "/")}
      </div>
    </Loading>
    </>
  );
};

export default Mobmenu;