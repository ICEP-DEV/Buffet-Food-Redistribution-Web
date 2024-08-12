import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons for password visibility toggle

const RecepientSignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
  const [address, setAddress] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State for confirm password visibility

  const handleSignUp = async (event) => {
    event.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5282/api/Recipient/register', {
        RecipientName: name,
        RecipientEmail: email,
        RecipientPhoneNum: telephoneNumber,
        RecipientAddress: address,
        password,
      });

      console.log('Sign up successful:', response.data);

      if (response.data.flag) {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate('/Login');
        }, 5000);
      } else {
        toast.warning(response.data.message);
      }
    } catch (error) {
      console.error('Sign up failed:', error.response);
      toast.error('Something went wrong');
    }
  };

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <ToastContainer />
      <div className="signup" style={{ marginTop: '50px', marginBottom: '80px', paddingTop: '0' }}>
        <form
          style={{
            width: '100%',
            maxWidth: '450px',
            margin: 'auto',
            background: '#A9A9A9',
            boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
            padding: '40px 55px 45px 55px',
            borderRadius: '15px',
            transition: 'all .3s',
          }}
          onSubmit={handleSignUp}
        >
          <h3 style={{ textAlign: 'center', margin: '0', lineHeight: '1', paddingBottom: '20px' }}>Sign Up</h3>
          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}>Organisation Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Organization name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}>Telephone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Telephone number"
              value={telephoneNumber}
              onChange={(e) => setTelephoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}>Business Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Street Address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-3 position-relative">
            <label style={{ fontWeight: 'bold' }}>Password</label>
            <input
              type={passwordVisible ? 'text' : 'password'} // Toggle between text and password type
              className="form-control"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-light position-absolute end-0 top-50 translate-middle-y"
              style={{ background: 'transparent', border: 'none' }}
              onClick={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="mb-3 position-relative">
            <label style={{ fontWeight: 'bold' }}>Confirm Password</label>
            <input
              type={confirmPasswordVisible ? 'text' : 'password'} // Toggle between text and password type
              className="form-control"
              placeholder="Confirm password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-light position-absolute end-0 top-50 translate-middle-y"
              style={{ background: 'transparent', border: 'none' }}
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} // Toggle confirm password visibility
            >
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-dark">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right" style={{ textAlign: 'right' }}>
            Already registered? <a href="/login">Login</a>
          </p>
        </form>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default RecepientSignUp;

