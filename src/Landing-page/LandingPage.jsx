import React from 'react';
import Myimage from '../components/download (1).jpeg';

const LandingPage = () => {
  return (
    <>
      <section id="header-banner" className="header-banner mb-3 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="header-content">
                <h1 className="header-title">Welcome to Our Food Share Network</h1>
                <p className="header-subtitle"></p>
                <a href="/foodform" className="btn btn-primary">Donate Food</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-image">
                <img src={Myimage} className="img-fluid" alt="Header Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="section mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <div className="icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3 className="card-title">Seamless Donation</h3>
                  <p className="card-text">Our product helps you donate your surplus food through efficient and effective solutions.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <div className="icon">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <h3 className="card-title">Easy Integration</h3>
                  <p className="card-text">Seamlessly integrate our product with your existing systems and workflows without any hassle.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <div className="icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3 className="card-title">Customer Satisfaction</h3>
                  <p className="card-text">Exceptional experiences to our members, leading to higher satisfaction and loyalty.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="about-section bg-light py-5 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="section-title mb-4">About Us</h2>
              <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus justo nec ex ultricies pretium. Nulla facilisi. Mauris nec libero vel dolor sollicitudin mattis. Donec aliquam libero eu justo lobortis, ac efficitur dui feugiat. Duis consectetur lorem eget justo volutpat, eget mollis magna suscipit. In vestibulum felis vitae risus euismod, vel varius odio venenatis. Phasellus posuere velit at orci aliquet, sit amet vestibulum orci pharetra. In sit amet malesuada nisi.
              </p>
              <p className="section-description">
                We are committed to addressing food insecurity in our community. Through our food donation program, we collect and distribute food items to those in need. Your support helps us make a difference in people's lives.
              </p>
              <a href="/foodform" className="btn btn-primary">Donate Food</a>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <img src="https://via.placeholder.com/400" alt="About Us" className="img-fluid rounded-circle" />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default LandingPage;
