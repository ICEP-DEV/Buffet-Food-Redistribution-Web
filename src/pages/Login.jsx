import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      console.log(userType);
      if (userType.toLocaleLowerCase() === "Recipient".toLocaleLowerCase()) {
        const result = await axios.post(
          "http://localhost:5282/api/Recipient/Login",
          {
            RecipientEmail: email,
            password,
          }
        );

        console.log(result.data);
        if (result.data.flag) {
          toast.success(result.data.message);
          setTimeout(() => {
            //window.location.reload();
           
          }, 5000);
        }
        else{
          toast.warning(result.data.message);
        }
      } else {
        console.log(userType);
        const response = await axios.post(
          "http://localhost:5282/api/Donor/Login",
          {
            DonorEmail: email,
            password,
          }
        );

        console.log(response.data);
        if (response.data.flag) {
          toast.success(response.data.message);
          setTimeout(() => {
            //window.location.reload();
            
          }, 5000);
        }
        else{
          toast.warning(response.data.message);
        }
      }
    } catch (error) {
      // Optionally, you can redirect the user or perform other actions upon successful login
      console.error("Login failed:", error.response);
    }
  };

  return (
    <div style={{ fontFamily: 'Fira Sans, sans-serif' }}>
      <ToastContainer />
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          .login {
            padding-top: 25%;
          }

          html, .App, #root, .auth-wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
          }

          .navbar-light {
            background-color: #ffffff;
            box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
          }

          .auth-wrapper {
            display: flex;
            padding-top: 50px;
            justify-content: center;
            flex-direction: column;
            text-align: left;
          }

          .auth-inner {
            width: 450px;
            margin: auto;
            background: #ffffff;
            box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
            padding: 40px 55px 45px 55px;
            border-radius: 15px;
            transition: all .3s;
          }

          .auth-wrapper .form-control:focus {
            border-color: #167bff;
            box-shadow: none;
          }

          .auth-wrapper h3 {
            text-align: center;
            margin: 0;
            line-height: 1;
            padding-bottom: 20px;
          }

          .custom-control-label {
            font-weight: 400;
          }

          .forgot-password,
          .forgot-password a {
            text-align: right;
            font-size: 13px;
            padding-top: 10px;
            color: #7f7d7d;
            margin: 0;
          }

          .forgot-password a {
            color: #167bff;
          }
        `}
      </style>
      <div className="login">
        <form style={{ width: '450px', margin: 'auto', background: '#ffffff', boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)', padding: '40px 55px 45px 55px', borderRadius: '15px', transition: 'all .3s' }}  onSubmit={handleLogin}>
          <h3 style={{ textAlign: 'center', margin: '0', lineHeight: '1', paddingBottom: '20px' }}>Login</h3>
          <div>
            <input
              type="radio"
              name="userType"
              value="Recipient"
              onChange={(e) => setUserType(e.target.value)}
            />{" "}
            Recipient
            <input
              type="radio"
              name="userType"
              value="Donor"
              onChange={(e) => setUserType(e.target.value)}
            />{" "}
            Donor
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <Link to='/home'>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            </Link>
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;