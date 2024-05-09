import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Organisation Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter organisation name"
          />
        </div>
        <div className="mb-3">
          <label>Email Address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <label>TelePhone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter telephone number "
          />
        </div>
        <div className="mb-3">
          <label>Organisation Address</label>
          <input
            type="address"
            className="form-control"
            placeholder="Enter address"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered? <a href="/sign-in">Login</a>
        </p>
      </form>
    )
  }
}