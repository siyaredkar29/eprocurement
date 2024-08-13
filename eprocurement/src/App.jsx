import { Route,BrowserRouter as  Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Pages/Login/Login";
import RegisterPage from "./Components/Pages/RegisterPage/RegisterPage";
import ContactUs from "./Components/ContactUs/ContactUs";
import TenderByLocation from "./Components/Pages/TenderByLocation/TenderByLocation";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/tender-by-location" element={<TenderByLocation />} />


        </Routes>
        
      </Router>
    </>
  );
};

export default App;