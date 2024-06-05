import React from 'react';
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const RecepientSignUp = () => {
  
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5282/api/Recipient/register",
        {
        RecipientName: name,
          RecipientEmail: email,
          RecipientPhoneNum: telephoneNumber,
          RecipientAddress: address,
          password,
        }
      );

      console.log("Sign up successful:", response.data);
      

      if (response.data.flag ) {
        toast.success(response.data.message);
        setTimeout(() => {
          //window.location.reload();
          navigate("/Login");
        }, 5000);
      }
      else{
        toast.warning(response.data.message);
      }

      
      
      // Optionally, you can redirect the user or show a success message here
    } catch (error) {
      console.error("Sign up failed:", error.response);
      toast.error("Something went wrong");
      // Log the response error
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className='signup' style={{ paddingTop: '0' }}>
        <form style={{ width: '100%', maxWidth: '450px', margin: 'auto', background: '#ffffff', boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)', padding: '40px 55px 45px 55px', borderRadius: '15px', transition: 'all .3s' }} onSubmit={handleSignUp}>
          <h3 style={{ textAlign: 'center', margin: '0', lineHeight: '1', paddingBottom: '20px' }}>Sign Up</h3>
          <div className="mb-3">
            <label>Organisation name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Organization name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <label>Telephone number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Telephone number"
              //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              title="Please enter a valid South African telephone number (e.g., 123-456-7890)"
              value={telephoneNumber}
              onChange={(e) => setTelephoneNumber(e.target.value)}
            />
          </div>
          <div>
            <label>Business Address</label>
            <div className="mb-3">
              <label>Street Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Street Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            {/* Other address fields */}
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              //pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              title="Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character."
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default RecepientSignUp;
