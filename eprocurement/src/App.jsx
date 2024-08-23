import { Route,BrowserRouter as  Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Pages/Login/Login";
import RegisterPage from "./Components/Pages/RegisterPage/RegisterPage";
import ContactUs from "./Components/ContactUs/ContactUs";
import TenderByLocation from "./Components/Pages/TenderByLocation/TenderByLocation";
 import TendersInArchive from "./Components/Pages/TenderByLocation/TendersInArchive";
 import TenderByOrganisation from "./Components/Pages/TenderByLocation/TenderByOrganisation"
 import TenderStatus from "./Components/Pages/TenderByLocation/TenderStatus"
 import TenderByclassification from "./Components/Pages/TenderByLocation/TenderByClassification"
import Downloads from "./Components/Pages/TenderByLocation/Downloads"
import Cancelled from "./Components/Pages/TenderByLocation/Cancelled"
import Announcements from "./Components/Pages/Announcements";
import Awards from "./Components/Pages/TenderByLocation/Awards";
import Sitec from "./Components/Pages/TenderByLocation/Sitec";
import TenderForm from "./Components/Pages/TenderByLocation/TenderForm";
import Approve from "./Components/Pages/TenderByLocation/Approve";

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
          <Route path="/tender-by-organisation" element={<TenderByOrganisation />} />
          <Route path="/tenders-in-archive" element={<TendersInArchive />} />
          <Route path="/tender-status" element={<TenderStatus />} />
          <Route path="/tender-by-classification" element={<TenderByclassification />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/current" element={<Cancelled />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/sitec" element={<Sitec />} />
          <Route path="/tenders/create" element={ <TenderForm />} />
          <Route path="/tenders/approve" element={<Approve />} />



        </Routes>
        
      </Router>
    </>
  );
};

export default App;