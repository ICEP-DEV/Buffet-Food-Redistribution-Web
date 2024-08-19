// import React, { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [address, setAddress] = useState('');
//   const [telephoneNumber, setTelephoneNumber] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const isValidPassword = (password) =>
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password);

//   const handleSignUp = async (event) => {
//     event.preventDefault();

//     if (!isValidEmail(email)) {
//       toast.error('Please enter a valid email address');
//       return;
//     }

//     if (!isValidPassword(password)) {
//       toast.error('Password must be between 8 to 30 characters and include at least one lowercase letter, one uppercase letter, one digit, and one special character');
//       return;
//     }

//     if (password !== confirmPassword) {
//       toast.error('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5282/api/Donor/register', {
//         DonorName: name,
//         DonorEmail: email,
//         DonorPhoneNum: telephoneNumber,
//         DonorAddress: address,
//         password,
//       });

//       console.log('Sign up successful:', response.data);
//       if (response.data.flag) {
//         toast.success(response.data.message);
//         setTimeout(() => {
//           window.location.href = '/login';
//         }, 5000);
//       } else {
//         toast.warning(response.data.message);
//       }
//     } catch (error) {
//       console.error('Sign up failed:', error.response);
//       toast.error('Something went wrong');
//     }
//   };

//   return (
//     <div>
      
//       <ToastContainer />
      
//       <div className="container mt-5">

//         <div className="row justify-content-center">
//           <div className="col-12 col-md-8 col-lg-6 col-xl-4 mx-auto">
//             <div className="signup my-5">
//               <br></br>
//               <form
//                 style={{
//                   background: '#A9A9A9',
//                   boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
//                   padding: '40px 55px',
//                   borderRadius: '15px',
//                 }}
//                 onSubmit={handleSignUp}
//               >
//                 <h3 className="text-center mb-4">Sign Up</h3>

//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label fw-bold">Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="form-control"
//                     placeholder="Enter Donor Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label fw-bold">Email Address</label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="form-control"
//                     placeholder="Enter Email Address"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="telephoneNumber" className="form-label fw-bold">Telephone Number</label>
//                   <input
//                     type="tel"
//                     id="telephoneNumber"
//                     className="form-control"
//                     placeholder="Enter Telephone Number"
//                     value={telephoneNumber}
//                     onChange={(e) => setTelephoneNumber(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="address" className="form-label fw-bold">Physical Address</label>
//                   <input
//                     type="text"
//                     id="address"
//                     className="form-control"
//                     placeholder="Enter Physical Address"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label fw-bold">Password</label>
//                   <div className="position-relative">
//                     <input
//                       type={showPassword ? 'text' : 'password'}
//                       id="password"
//                       className="form-control"
//                       placeholder="Enter password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                     <div
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="position-absolute top-50 end-0 translate-middle-y pe-2 cursor-pointer"
//                     >
//                       {showPassword ? <FaEyeSlash /> : <FaEye />}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="confirmPassword" className="form-label fw-bold">Confirm Password</label>
//                   <div className="position-relative">
//                     <input
//                       type={showConfirmPassword ? 'text' : 'password'}
//                       id="confirmPassword"
//                       className="form-control"
//                       placeholder="Confirm password"
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       required
//                     />
//                     <div
//                       onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                       className="position-absolute top-50 end-0 translate-middle-y pe-2 cursor-pointer"
//                     >
//                       {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="d-grid">
//                   <button type="submit" className="btn btn-dark">
//                     Sign Up
//                   </button>
//                 </div>

//                 <p className="text-end mt-3">
//                   Already registered? <a className='text-decoration-none' href="/login">Login</a>
//                 </p>

//                 <p className="text-center">
//                   <a className='text-decoration-none' href="/Policies">Terms and Conditions</a>
//                 </p>
//               </form>
//               <br></br>
//               <br></br>
//             </div>
//             <br></br>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [address, setAddress] = useState('');
//   const [telephoneNumber, setTelephoneNumber] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const isValidPassword = (password) =>
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password);

//   const handleSignUp = async (event) => {
//     event.preventDefault();

//     if (!isValidEmail(email)) {
//       toast.error('Please enter a valid email address');
//       return;
//     }

//     if (!isValidPassword(password)) {
//       toast.error('Password must be between 8 to 30 characters and include at least one lowercase letter, one uppercase letter, one digit, and one special character');
//       return;
//     }

//     if (password !== confirmPassword) {
//       toast.error('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5282/api/Donor/register', {
//         DonorName: name,
//         DonorEmail: email,
//         DonorPhoneNum: telephoneNumber,
//         DonorAddress: address,
//         password,
//       });

//       console.log('Sign up successful:', response.data);
//       if (response.data.flag) {
//         toast.success(response.data.message);
//         setTimeout(() => {
//           window.location.href = '/login';
//         }, 5000);
//       } else {
//         toast.warning(response.data.message);
//       }
//     } catch (error) {
//       console.error('Sign up failed:', error.response);
//       toast.error('Something went wrong');
//     }
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-12 col-md-8 col-lg-6 col-xl-4">
//             <div className="signup my-5">
//               <br/>
//               <form
//                 style={{
//                   background: '#A9A9A9',
//                   boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
//                   padding: '20px 30px', // Reduced padding
//                   borderRadius: '15px',
//                 }}
//                 onSubmit={handleSignUp}
//               >
//                 <h3 className="text-center mb-4">Sign Up</h3>

//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label fw-bold">Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="form-control"
//                     placeholder="Enter Donor Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label fw-bold">Email Address</label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="form-control"
//                     placeholder="Enter Email Address"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="telephoneNumber" className="form-label fw-bold">Telephone Number</label>
//                   <input
//                     type="tel"
//                     id="telephoneNumber"
//                     className="form-control"
//                     placeholder="Enter Telephone Number"
//                     value={telephoneNumber}
//                     onChange={(e) => setTelephoneNumber(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="address" className="form-label fw-bold">Physical Address</label>
//                   <input
//                     type="text"
//                     id="address"
//                     className="form-control"
//                     placeholder="Enter Physical Address"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label fw-bold">Password</label>
//                   <div className="position-relative">
//                     <input
//                       type={showPassword ? 'text' : 'password'}
//                       id="password"
//                       className="form-control"
//                       placeholder="Enter password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                     <div
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="position-absolute top-50 end-0 translate-middle-y pe-2 cursor-pointer"
//                     >
//                       {showPassword ? <FaEyeSlash /> : <FaEye />}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="confirmPassword" className="form-label fw-bold">Confirm Password</label>
//                   <div className="position-relative">
//                     <input
//                       type={showConfirmPassword ? 'text' : 'password'}
//                       id="confirmPassword"
//                       className="form-control"
//                       placeholder="Confirm password"
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       required
//                     />
//                     <div
//                       onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                       className="position-absolute top-50 end-0 translate-middle-y pe-2 cursor-pointer"
//                     >
//                       {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="d-grid">
//                   <button type="submit" className="btn btn-dark">
//                     Sign Up
//                   </button>
//                 </div>

//                 <p className="text-end mt-3">
//                   Already registered? <a className='text-decoration-none' href="/login">Login</a>
//                 </p>

//                 <p className="text-center">
//                   <a className='text-decoration-none' href="/Policies">Terms and Conditions</a>
//                 </p>
//               </form>
//               <br></br>
//               <br></br>
//             </div>
//             <br></br>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [address, setAddress] = useState('');
//   const [telephoneNumber, setTelephoneNumber] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const isValidPassword = (password) =>
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password);

//   const isValidTelephoneNumber = (telephoneNumber) => {
//     // Check if the telephone number is only digits and starts with a '+' followed by the country code
//     const pattern = /^\+\d{1,3}\d{10}$/;
//     return pattern.test(telephoneNumber);
//   };

//   const handleSignUp = async (event) => {
//     event.preventDefault();

//     if (!isValidEmail(email)) {
//       toast.error('Please enter a valid email address');
//       return;
//     }

//     if (!isValidTelephoneNumber(telephoneNumber)) {
//       toast.error('Please enter a valid telephone number including the country code (e.g., +27XXXXXXXXXX)');
//       return;
//     }

//     if (!isValidPassword(password)) {
//       toast.error('Password must be between 8 to 30 characters and include at least one lowercase letter, one uppercase letter, one digit, and one special character');
//       return;
//     }

//     if (password !== confirmPassword) {
//       toast.error('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5282/api/Donor/register', {
//         DonorName: name,
//         DonorEmail: email,
//         DonorPhoneNum: telephoneNumber,
//         DonorAddress: address,
//         password,
//       });

//       console.log('Sign up successful:', response.data);
//       if (response.data.flag) {
//         toast.success(response.data.message);
//         setTimeout(() => {
//           window.location.href = '/login';
//         }, 5000);
//       } else {
//         toast.warning(response.data.message);
//       }
//     } catch (error) {
//       console.error('Sign up failed:', error.response);
//       toast.error('Something went wrong');
//     }
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-12 col-md-8 col-lg-6 col-xl-4">
//             <div className="signup my-5">
//               <br/>
//               <form
//                 style={{
//                   background: '#A9A9A9',
//                   boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
//                   padding: '20px 30px', // Reduced padding
//                   borderRadius: '15px',
//                 }}
//                 onSubmit={handleSignUp}
//               >
//                 <h3 className="text-center mb-4">Sign Up</h3>

//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label fw-bold">Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="form-control"
//                     placeholder="Enter Donor Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label fw-bold">Email Address</label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="form-control"
//                     placeholder="Enter Email Address"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="telephoneNumber" className="form-label fw-bold">Telephone Number</label>
//                   <input
//                     type="tel"
//                     id="telephoneNumber"
//                     className="form-control"
//                     placeholder="Enter Telephone Number"
//                     value={telephoneNumber}
//                     onChange={(e) => setTelephoneNumber(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="address" className="form-label fw-bold">Physical Address</label>
//                   <input
//                     type="text"
//                     id="address"
//                     className="form-control"
//                     placeholder="Enter Physical Address"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label fw-bold">Password</label>
//                   <div className="position-relative">
//                     <input
//                       type={showPassword ? 'text' : 'password'}
//                       id="password"
//                       className="form-control"
//                       placeholder="Enter password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                     <div
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="position-absolute top-50 end-0 translate-middle-y pe-2 cursor-pointer"
//                     >
//                       {showPassword ? <FaEyeSlash /> : <FaEye />}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="confirmPassword" className="form-label fw-bold">Confirm Password</label>
//                   <div className="position-relative">
//                     <input
//                       type={showConfirmPassword ? 'text' : 'password'}
//                       id="confirmPassword"
//                       className="form-control"
//                       placeholder="Confirm password"
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       required
//                     />
//                     <div
//                       onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                       className="position-absolute top-50 end-0 translate-middle-y pe-2 cursor-pointer"
//                     >
//                       {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="d-grid">
//                   <button type="submit" className="btn btn-dark">
//                     Sign Up
//                   </button>
//                 </div>

//                 <p className="text-end mt-3">
//                   Already registered? <a className='text-decoration-none' href="/login">Login</a>
//                 </p>

//                 <p className="text-center">
//                   <a className='text-decoration-none' href="/Policies">Terms and Conditions</a>
//                 </p>
//               </form>
//               <br></br>
//               <br></br>
//             </div>
//             <br></br>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import 'react-toastify/dist/ReactToastify.css';
// import video from "../components/videos/f.mp4";

// // Import your video file


// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [address, setAddress] = useState('');
//   const [telephoneNumber, setTelephoneNumber] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const isValidEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const isValidPassword = (password) => {
//     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password);
//   };

//   const handleSignUp = async (event) => {
//     event.preventDefault();

//     if (!isValidEmail(email)) {
//       toast.error('Please enter a valid email address');
//       return;
//     }

//     if (!isValidPassword(password)) {
//       toast.error('Password must be between 8 to 30 characters and include at least one lowercase letter, one uppercase letter, one digit, and one special character');
//       return;
//     }

//     if (password !== confirmPassword) {
//       toast.error('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5282/api/Donor/register', {
//         DonorName: name,
//         DonorEmail: email,
//         DonorPhoneNum: telephoneNumber,
//         DonorAddress: address,
//         password,
//       });

//       console.log('Sign up successful:', response.data);
//       if (response.data.flag) {
//         toast.success(response.data.message);
//         setTimeout(() => {
//           window.location.href = '/login';
//         }, 5000);
//       } else {
//         toast.warning(response.data.message);
//       }
//     } catch (error) {
//       console.error('Sign up failed:', error.response);
//       toast.error('Something went wrong');
//     }
//   };

//   return (
//     <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
//       <ToastContainer />
//       <video
//         autoPlay
//         loop
//         muted
//         className="img-fluid w-100"
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           zIndex: -1,
//         }}
//       >
//         <source src={video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <div className="signup-container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
//         <form
//           style={{
//             width: '450px',
//             margin: 'auto',
//             background: 'rgba(169, 169, 169, 0.5)', // Transparent grey background
//             boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
//             padding: '40px 55px 45px 55px',
//             borderRadius: '15px',
//             transition: 'all .3s',
//           }}
//           onSubmit={handleSignUp}
//         >
//           <div className="mb-3">
//             <h3 style={{ textAlign: 'center', margin: '0', lineHeight: '1', paddingBottom: '20px' }}>SIGN UP</h3>
//             <label style={{ fontWeight: 'bold' }}>Name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Donor Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label style={{ fontWeight: 'bold' }}>Email Address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)} 
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label style={{ fontWeight: 'bold' }}>Telephone Number</label>
//             <input
//               type="tel"
//               className="form-control"
//               placeholder="Enter Telephone Number"
//               value={telephoneNumber}
//               onChange={(e) => setTelephoneNumber(e.target.value)} 
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label style={{ fontWeight: 'bold' }}>Physical Address</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Physical Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)} 
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label style={{ fontWeight: 'bold' }}>Password</label>
//             <div style={{ position: 'relative' }}>
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 className="form-control"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)} 
//                 required
//               />
//               <div onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer' }}>
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </div>
//             </div>
//           </div>
//           <div className="mb-3">
//             <label style={{ fontWeight: 'bold' }}><strong>Confirm Password</strong></label>
//             <div style={{ position: 'relative' }}>
//               <input
//                 type={showConfirmPassword ? 'text' : 'password'}
//                 className="form-control"
//                 placeholder="Confirm password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)} 
//                 required
//               />
//               <div onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer' }}>
//                 {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//               </div>
//             </div>
//           </div>
//           <div className="d-grid">
//             <button type="submit" className="btn btn-dark">
//               Sign Up
//             </button>
//           </div>
//           <p className="forgot-password text-right" style={{ textAlign: 'right' }}>
//             Already registered? <a href="/login">Login</a>
//           </p>
//           <p><a href="/Policies" className=''>Terms Of Conditionn</a></p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import video from "../components/videos/f.mp4"; // Import your video file

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!isValidPassword(password)) {
      toast.error('Password must be between 8 to 30 characters and include at least one lowercase letter, one uppercase letter, one digit, and one special character');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

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
        toast.success(response.data.message);
        setTimeout(() => {
          window.location.href = '/login';
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
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <ToastContainer />
      <video
        autoPlay
        loop
        muted
        className="img-fluid w-100"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
        zIndex: -1,
      }} />

      <div className="signup-container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <form
          style={{
            width: '450px',
            margin: 'auto',
            background: 'rgba(169, 169, 169, 0.8)', // Transparent grey background
            boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
            padding: '40px 55px 45px 55px',
            borderRadius: '15px',
            transition: 'all .3s',
            position: 'relative',
            zIndex: 1,
          }}
          onSubmit={handleSignUp}
        >
          <div className="mb-3">
            <h3 style={{ textAlign: 'center', margin: '0', lineHeight: '1', paddingBottom: '20px' }}>SIGN UP</h3>
            <label style={{ fontWeight: 'bold' }}>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Donor Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}>Telephone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Telephone Number"
              value={telephoneNumber}
              onChange={(e) => setTelephoneNumber(e.target.value)} 
              required
            />
          </div>
          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}>Physical Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Physical Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)} 
              required
            />
          </div>
          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
              <div onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer' }}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}><strong>Confirm Password</strong></label>
            <div style={{ position: 'relative' }}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="form-control"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required
              />
              <div onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer' }}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-dark">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right" style={{ textAlign: 'right' }}>
            Already registered? <a href="/login">Login</a>
          </p>
          <p><a href="/Policies" className=''>Terms Of Conditions</a></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

