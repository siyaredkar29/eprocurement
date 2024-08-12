import { Route,BrowserRouter as  Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Pages/Login/Login";
import RegisterPage from "./Components/Pages/RegisterPage/RegisterPage";
import Profile from "./Components/profile";
import ContactUs from "./Components/ContactUs/ContactUs";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contactus" element={<ContactUs />} />

        </Routes>
        
      </Router>
    </>
  );
};

export default App;