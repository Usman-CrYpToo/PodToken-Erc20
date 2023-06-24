import React from 'react';
import logo from '../components/logo.jpg';

const Homes = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="container text-center">

      <div className="fw-bold fst-italic mt-5">
        <h1 className="text-white mb-4"  style={{ fontSize: '60px', fontFamily: 'raleway', fontWeight: 'bold' }}>
          Launching Pod Token
        </h1>
        <h1 className="text-white mb-4" style={{ fontSize: '50px' }}>
          (PODS) ERC20 Token
        </h1>
        <h5 className="text-white mb-5" style={{ fontSize: '18px' }}>
          Discover the power and potential of PodToken, a revolutionary ERC20
          token designed to reshape the way you engage with digital assets.
        </h5>
      </div>

      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <img
              src={logo}
              className="rounded-circle border border-5 position-relative img-fluid"
              style={{ width: '100%', maxWidth: '250px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', cursor: 'pointer' }}
              alt="..."
            />
          </div> 
        </div>

        <div className="row">
          <div className="col">
            <img
              src={logo}
              className="rounded-circle border border-5 position-relative img-fluid"
              style={{ width: '100%', maxWidth: '200px', boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.4)', cursor: 'pointer' }}
              alt="..."
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img
              src={logo}
              className="rounded-circle border border-5 position-relative img-fluid"
              style={{ width: '100%', maxWidth: '110px', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)', cursor: 'pointer' }}
              alt="..."
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img
              src={logo}
              className="rounded-circle border border-5 position-relative img-fluid"
              style={{ width: '100%', maxWidth: '80px', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.2)', cursor: 'pointer' }}
              alt="..."
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img
              src={logo}
              className="rounded-circle border border-5 position-relative img-fluid"
              style={{ width: '100%', maxWidth: '60px', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', cursor: 'pointer' }}
              alt="..."
            />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <button
         
          className="btn rounded-pill btn-lg me-3"
          onClick={() => openLink('https://sepolia.etherscan.io/token/0x0ee369d097d944c1898ac04259c7f9766708aa72')}
          style={{backgroundColor:'#D83F87', color:'whitesmoke'}}
        >
          Etherscan
        </button>

        <button
          type="button"
          className="btn rounded-pill btn-lg"
          onClick={() => openLink('https://github.com/Usman-CrYpToo/PodToken-Erc20')}
          style={{backgroundColor:'#D83F87', color:'whitesmoke',paddingRight:'25px',paddingLeft:'25px',marginLeft:'10px'}}
        >
          Github
        </button>
      </div>
      
    </div>
  );
};

export default Homes;
