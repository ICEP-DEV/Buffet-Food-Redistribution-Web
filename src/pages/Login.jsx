
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Check localStorage for saved email and userType on component mount
    const storedEmail = localStorage.getItem('rememberedEmail');
    const storedUserType = localStorage.getItem('rememberedUserType');

    if (storedEmail && storedUserType) {
      setEmail(storedEmail);
      setUserType(storedUserType);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    if (userType === 'Admin') {
      handleAdminLogin();
    } else {
      handleUserLogin();
    }
  };

  const handleUserLogin = async () => {
    try {
      const endpoint = userType.toLowerCase() === 'recipient'
        ? 'http://localhost:5282/api/Recipient/Login'
        : 'http://localhost:5282/api/Donor/Login';

      const result = await axios.post(endpoint, {
        [`${userType}Email`]: email,
        password,
      });

      if (result.data.flag) {
        toast.success(result.data.message);
        const prefixUsername = getPrefixUsername(email);
        setUser({ prefixUsername, userType: userType.toLowerCase() });

        localStorage.setItem('token', result.data.token);
        setTimeout(() => {
          navigate(userType.toLowerCase() === 'recipient' ? '/RecipientLandingPage' : '/home');
        }, 5000);

        if (onLoginSuccess) onLoginSuccess();
      } else {
        toast.warning(result.data.message);
      }
    } catch (error) {
      console.error('Login failed:', error.response);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  const handleAdminLogin = async () => {
    try {
      const result = await axios.post('http://localhost:5282/api/Admin', {
        email,
        password,
      });

      if (result.data.flag) {
        toast.success(result.data.message);
        const prefixUsername = getPrefixUsername(email);
        setUser({ prefixUsername, userType: 'admin' });

        localStorage.setItem('token', result.data.token);
        navigate('/adminDash');
        if (onLoginSuccess) onLoginSuccess();
      } else {
        toast.warning(result.data.message);
      }
    } catch (error) {
      console.error('Admin login failed:', error.response);
      toast.error('Admin login failed. Please check your credentials.');
    }
  };

  const getPrefixUsername = (email) => {
    const username = email.split('@')[0];
    return username.charAt(0).toUpperCase() + username.slice(1);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0 }}>
      <ToastContainer />
      <div className="signup">
        <form style={{ width: 'auto', margin: 'auto', background: '#A9A9A9', boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)', padding: '40px 55px 45px 55px', borderRadius: '15px', transition: 'all .3s' }} onSubmit={handleLogin}>
          <h3 style={{ textAlign: 'center', margin: '0', lineHeight: '1', paddingBottom: '20px' }}>Login</h3>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="radio"
              name="userType"
              value="Recipient"
              onChange={(e) => setUserType(e.target.value)}
              required
            />{' '}
            Recipient{' '}
            <input
              type="radio"
              name="userType"
              value="Donor"
              onChange={(e) => setUserType(e.target.value)}
              required
            />{' '}
            Donor{' '}
            <input
              type="radio"
              name="userType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />{' '}
            Admin
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                onClick={togglePasswordVisibility}
                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          {userType !== 'Admin' && (
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
          )}
          <div className="d-grid">
            <button type="submit" className="btn btn-dark" style={{ width: '100%' }}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <Link to="/forgot-password">password?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

