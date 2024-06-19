import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5282/api/Donor/register', {
        DonorName: name,
        DonorEmail: email,
        DonorPhoneNum: telephoneNumber,
        DonorAddress: address,
        password,
      });

      console.log('Sign up successful:', response.data);
      if (response.data.flag) {
        toast.success(response.data.message, {
          autoClose: 1000 // Set the autoClose duration to 1 second (1000 milliseconds)
        });
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
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
      <ToastContainer />
      <div className="signup mb-5" style={{ paddingTop: '10%', paddingBottom: '50px' }}>
        <form
          style={{
            width: '450px',
            margin: 'auto',
            background: '#A9A9A9',
            boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
            padding: '40px 55px 45px 55px',
            borderRadius: '15px',
            transition: 'all .3s',
          }}
          onSubmit={handleSignUp}
        >
          <div className="mb-3">
            <h3 style={{ textAlign: 'center', margin: '0', lineHeight: '1', paddingBottom: '20px' }}>Sign Up</h3>
            <label style={{ fontWeight: 'bold' }}><strong>Name</strong></label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Donor Name"
              value={name}
              onChange={(e) => setName(e.target.value)} required
            />
          </div>

          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}><strong>Email Address</strong></label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}required
            />
          </div>
          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}><strong>Telephone Number</strong></label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Telephone Number"
              value={telephoneNumber}
              onChange={(e) => setTelephoneNumber(e.target.value)}required
            />
          </div>
          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}><strong>Physical Address</strong></label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Physical Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}required
            />
          </div>
          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}><strong>Password</strong></label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-dark">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right" style={{ textAlign: 'right' }}>
            Already registered? <a href="/login">Login</a>
          </p>
          <p><a href="#" className=''>Terms Of Condition</a></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
