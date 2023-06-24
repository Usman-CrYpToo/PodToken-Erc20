import React, { useContext, useState } from 'react'
import { Erc20IcoContext } from './PodToken';
import { ethers } from 'ethers';
export const TranToken = React.createContext();

const TransferToken = () => {
  const { contract } = useContext(Erc20IcoContext);
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const Transfer = async () => {

    try {
      if (contract) {
        const tx = await contract.transfer(address, ethers.parseEther(amount));
        tx.wait();
        console.log("transaction done");
      }
    } catch {
      console.log("something wrong with transfer");
    }
  }


  return (
    <div className="border border-3 border-danger-subtle bg-gradient rounded-4 position-absolute top-50 start-50 translate-middle" style={{ marginTop: '1000px', backgroundColor: '#D83F87', padding: '1px', width: '600px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)', textAlign: 'center' }}>

      <h1 style={{ color: 'whitesmoke', fontFamily: 'cursive', fontSize: '40px', fontWeight: 'bold', marginBottom: '20px', paddingLeft: '10px' }}>
        Token Transfer
      </h1>

      <div class="mb-3" style={{ margin: '30px' }}>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Address" onChange={(event) => setAddress(event.target.value)} />
      </div>
      
      <div class="mb-3" style={{ margin: '30px' }}>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Amount" onChange={(event) => setAmount(event.target.value)} />
      </div>

      <button type="button" className="btn rounded-pill" onClick={Transfer} style={{ color: 'whitesmoke', fontFamily: 'inherit', fontStretch: 'ultra-expanded', backgroundColor: 'purple', marginTop: '11px', marginBottom: '10px', marginLeft: '10px', paddingLeft: '40px', paddingRight: '40px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Transfer</button>

    </div>
  )
}

export default TransferToken