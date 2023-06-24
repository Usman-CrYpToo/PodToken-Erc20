import React from 'react';
import logo from '../components/logo.jpg';

const Navbar = ({ contract }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar bg-gradient" style={{ background: 'purple', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}>
        <div className="container-fluid">

          <a className="navbar-brand" style={{ marginLeft: 50 }}>
            <img src={logo} alt="" className="rounded-circle" width="50" height="50" />
            <a className="navbar-brand fw-bold fst-italic fs-3" style={{ color: '#f5f5f5' }}>
              PodToken
            </a>
          </a>

          <div className="d-flex flex-column flex-lg-row align-items-center" >

            <div className="badge text-wrap mb-2 mb-lg-0" style={{ width: '100%', maxWidth: 840, height: 30, marginRight: 40, backgroundColor: '#D83F87', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)' }}>
              Address:
              {contract.account ? <> {contract.account} </> : '0x000000'}
            </div>

            <div className="badge text-wrap mb-2 mb-lg-0" style={{ width: '100%', maxWidth: 180, height: 20, marginRight: 40, backgroundColor: '#D83F87', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.4)' }}>
              Balance:
              {contract.balanceOf ? <> {contract.balanceOf} Tokens</> : '0 Tokens'}
            </div>

            <button className="btn btn-warning" onClick={contract.connect} style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)' }}>
              {contract.account ? 'Connected' : 'Connect'}
            </button>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
