import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("value")) || []
  );
  // const [flag, setFlag] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();
  const [show, setShow] = useState(false);

  function handleLogin() {
    if (!email || !password) {
      setShow(true);
      toast.error("Form Inputs must be specified!");
    } else {
      console.log({ user });
      var index = user.find((userDetails) => userDetails.email === email);
      if (index) {
        console.log({ index });
        localStorage.setItem("LoginUser", JSON.stringify(index));
        toast.success("Successfully Login");
        history.push("/dashboard");
      } else {
        toast.error("Invalid Email Or Password!");
      }
    }
  }
  return (
    <div>
      <>
        <h3>LogIn</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <button onClick={handleLogin} className="btn btn-dark btn-lg btn-block">
          Login
        </button>

        <Link to="/register">
          <button className="btn btn-light btn-lg btn-block">Register</button>
        </Link>

        <ToastContainer />
      </>
    </div>
  );
};

export default Login;
