import React, { useState } from 'react';
import { ethers } from 'ethers';

const Holders = ({ user }) => {

  return (
    <div className="d-flex flex-wrap" style={{ marginLeft: '100px', marginTop: '1290px' }}>
      {
        (user.getUserInfo).map((value, ind) => {
          return (
            <div key={ind}>
              <div className="border border-3 border-danger-subtle bg-gradient rounded m-3" style={{ maxWidth: '300px',
               boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                backgroundColor: '#D83F87',
                 textAlign: 'center', }}>

                <h3 className="text-center pt-3" style={{ color: 'whitesmoke', fontFamily: 'cursive', fontSize: '30px', fontWeight: 'bold' }} >
                  Txn #{Number(value.userId)}
                </h3>

                <div className="badge bg-gradient text-center p-4 mt-4 mb-3" style={{ backgroundColor: 'purple', fontSize: '30px' }}>
                  {Number(ethers.formatEther(value.Ammount))} Tokens
                </div>

                <div className="badge bg-gradient text-wrap p-2 mb-2" style={{ backgroundColor: 'purple' }}>
                  From: {`${value.From}`.slice(0, 20)}...
                </div>

                <div className="badge bg-gradient text-wrap p-2 mb-4" style={{ backgroundColor: 'purple' }}>
                  TO: {`${value.TO}`.slice(0, 22)}...
                </div>

              </div>

            </div>
          )
        })
      }
    </div>
  );
};

export default Holders;


