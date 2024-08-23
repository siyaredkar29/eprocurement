import { useEffect, useState } from "react";
import { Form, Input, Button, Typography, Divider, message } from "antd";
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
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const lockoutDuration = 3 * 60 * 1000; // 3 minutes in milliseconds

  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      if (await isAuth()) {
        message.info("Already Signed in", 4);
        navigate("/");
      }
    };
    checkAuth();
  }, [navigate]);

  useEffect(() => {
    const checkLockout = () => {
      const lockout = localStorage.getItem("lockoutTime");

      if (lockout) {
        const currentTime = new Date().getTime();
        const timeRemaining = lockout - currentTime;

        if (timeRemaining > 0) {
          setIsLocked(true);

          setTimeout(() => {
            setIsLocked(false);
            localStorage.removeItem("lockoutTime");
            message.success("Lockout period is over. You can try logging in now.",4);
          }, timeRemaining);
        } else {
          setIsLocked(false);
          localStorage.removeItem("lockoutTime");
        }
      }
    };

    checkLockout();
  }, []);

  const googlelogin = async () => {
    const provider = new GoogleAuthProvider();
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

          const userData = {
            email: user.email,
            firstName: user.displayName ? user.displayName.split(" ")[0] : "",
            lastName: user.displayName
              ? user.displayName.split(" ").slice(1).join(" ")
              : "",
          };

          const res = await axios({
            method: "POST",
            url: "http://localhost:9000/users/googlesignin",
            data: userData,
          });
          setToken(res.data.token);
          localStorage.setItem("isNicUser", res.data.isNicUser);
          localStorage.setItem("role", res.data.userRole);

          message.success("Login Successful", 5);

          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      })
      .catch((error) => {
        message.error("Login Failed", 5);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loginToDb = async () => {
    const failedAttempts = Number(localStorage.getItem("failedAttempts") || 0);

    if (isLocked) {
      message.error(`You are locked out. Try again later`);
      return;
    }

    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:9000/users/signin",
        data: { email, password },
      });

      message.success(res.data.message);
      setToken(res.data.token);

      localStorage.setItem("isNicUser", res.data.isNicUser);
      localStorage.setItem("role", res.data.userRole);

      localStorage.removeItem("failedAttempts");
      localStorage.removeItem("lockoutTime");
    } catch (error) {
      const updatedFailedAttempts = failedAttempts + 1;
      localStorage.setItem("failedAttempts", updatedFailedAttempts);

      if (updatedFailedAttempts >= 3) {
        const lockoutTime = new Date().getTime() + lockoutDuration;
        localStorage.setItem("lockoutTime", lockoutTime);
        setIsLocked(true);
        message.error("Too many failed attempts. You have been locked out.");
      } else {
        message.error(
          `Invalid credentials. ${3 - updatedFailedAttempts} attempt(s) left.`
        );
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLocked) {
      message.error(`You are locked out. Please try again later.`);
      return;
    }

    setLoading(false);
    try {
      await loginToDb();
     
      if (!isLocked) {
        await signInWithEmailAndPassword(auth, email, password);
        message.success("Login Successful", 5);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      message.error(`Error: ${error.message}`, 4);
    } finally {
      setLoading(false);
    }
  };

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
              onPressEnter={handleSubmit}
              aria-label="Email"
            />
          </Form.Item>
          <Form.Item label="Password" name="myPassword">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onPressEnter={handleSubmit}
              aria-label="Password"
            />
          </Form.Item>
          <Button
            type="primary"
            onClick={handleSubmit}
            block
            loading={loading}
            disabled={isLocked}
          >
            LOGIN
          </Button>

          <div className="newuser">
            New User?{" "}
            <button
              onClick={() => {
                navigate("/register");
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


