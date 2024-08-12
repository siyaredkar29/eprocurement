import { useEffect, useState } from "react";
import { Form, Input, Button,  Divider, message } from "antd";
import {
  GoogleOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "../Login/Login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../Components/firebase";
import { doc, setDoc } from "firebase/firestore";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import { isAuth } from "../../../Authentication";

const RegisterPage = () => {
  // State variables to store user inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    const f =async ()=>{
      if(await isAuth()){
        message.info("Already Signedin",4)
        navigate('/')
      }}
      f()
  },[])
 
  const navigate = useNavigate();
  const handleClick = (val) => navigate(val);
  const registerToDb = async () => {
    try {
      setLoading(true);
      const res = await axios({
        method: "POST",
        url: "http://localhost:9000/users/signup",
        data: { firstName, lastName, email, password },
      });
      message.success(res.data.message, 5);
    } catch (error) {
      message.error(error.response.data.error, 4);
    }
    
  };

  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    registerToDb();
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: email,
          firstName: firstName,
          lastName: lastName,
        });
      }
      message.success("Registered Successfully",4);
      setLoading(true)
        window.location.href = "/login";
      
    } catch (error) {
      message.error(`error:${error.message}`, 4);
    }
    finally{
      setLoading(false)
    }
  };

  return (
    <Loading loading={loading}>
      <div className="loginbg">
        <Form className="loginform">
          <h2 className="heading">REGISTER</h2>
          <Form.Item label="First Name" name="firstName">
            <Input
              placeholder="Enter your first name"
              value={firstName} // Bind the input value to the state variable
              onChange={(e) => setFirstName(e.target.value)} // Update state on change
            />
          </Form.Item>
          <Form.Item label="Last Name" name="lastName">
            <Input
              placeholder="Enter your last name"
              value={lastName} // Bind the input value to the state variable
              onChange={(e) => setLastName(e.target.value)} // Update state on change
            />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input
              placeholder="Enter your email"
              value={email} // Bind the input value to the state variable
              onChange={(e) => setEmail(e.target.value)} // Update state on change
            />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input
              type="password" // Use type="password" for password input
              placeholder="Enter your password"
              value={password} // Bind the input value to the state variable
              onChange={(e) => setPassword(e.target.value)} // Update state on change
            />
          </Form.Item>
          <Button type="primary" block onClick={handleSubmit} loading={loading}>
            REGISTER
          </Button>
          <div className="newuser">
            Already a User?{" "}
            <button
              onClick={() => {
                handleClick("/login");
              }}
            >
              login here
            </button>
          </div>
          <Divider style={{ borderColor: "black" }}>Register with</Divider>
          <div className="social">
            <GoogleOutlined />
            <FacebookOutlined />
            <TwitterOutlined />
          </div>
        </Form>
      </div>
    </Loading>
  );
};

export default RegisterPage;