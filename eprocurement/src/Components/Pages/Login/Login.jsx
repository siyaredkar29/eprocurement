import { useEffect, useState } from "react";
import { Form, Input, Button, Divider, message } from "antd";
import {
  GoogleOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, db } from "../../../Components/firebase";
import { doc, setDoc } from "firebase/firestore";
import "./Login.css";
import axios from "axios";
import { isAuth, setToken } from "../../../Authentication";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";

const LoginForm = () => {
  useEffect(() => {
    const f = async () => {
      if (await isAuth()) {
        message.info("Already Signedin", 4);
        navigate("/");
      }
    };
    f();
  }, []);

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const googlelogin = async () => {
    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({
      prompt: "select_account", // Forces the account selection every time
    });

    setLoading(true);
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;

        if (user) {
          await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            firstName: user.displayName ? user.displayName.split(" ")[0] : "",
            lastName: user.displayName
              ? user.displayName.split(" ").slice(1).join(" ")
              : "",
          });
          // console.log(user.auth);
          // console.log(user.displayName);
          // console.log(user.email);

          const userData = {
            email: user.email,
            firstName: user.displayName ? user.displayName.split(" ")[0] : "",
            lastName: user.displayName
              ? user.displayName.split(" ").slice(1).join(" ")
              : "",
          };
          //console.log(userData);

          const res = await axios({
            method: "POST",
            url: "http://localhost:9000/users/googlesignin",
            data: userData,
          });
          // console.log(res.data);
          setToken(res.data.token);
          message.success("Login Successful", 5);

          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        message.error("Login Failed", 5);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loginToDb = async () => {
    try {
      setLoading(true);

      const res = await axios({
        method: "POST",
        url: "http://localhost:9000/users/signin",
        data: { email, password },
      });

      message.success(res.data.message);
      //console.log(res.data);
      setToken(res.data.token);
    } catch (error) {
      message.error(
        `error:${error.response ? error.response.data.error : error.message}`,
        4
      );
    }
  };

  const handleSubmit = async (event) => {
    loginToDb();
    event.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      message.success("Login Successful", 5);
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      message.error(`Error: ${error.message}`, 4);
    } finally {
      setLoading(false);
    }
  };
  const navigate = useNavigate();
  const handleClick = (val) => navigate(val);

  return (
    <Loading loading={loading}>
      <div className="loginbg">
        <Form className="loginform">
          <h2 className="heading">LOGIN</h2>
          <br />
          <Form.Item label="Email" name="myEmail">
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
            />
          </Form.Item>
          <Form.Item label="Password" name="myPassword">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
          </Form.Item>
          <Button type="primary" onClick={handleSubmit} block loading={loading}>
            LOGIN
          </Button>
          <div className="newuser">
            New User?{" "}
            <button
              onClick={() => {
                handleClick("/register");
              }}
            >
              register here
            </button>
          </div>
          <Divider style={{ borderColor: "black" }}>Login with</Divider>
          <div className="social">
            <GoogleOutlined onClick={googlelogin} />
            <FacebookOutlined />
            <TwitterOutlined />
          </div>
        </Form>
      </div>
    </Loading>
  );
};

export default LoginForm;
