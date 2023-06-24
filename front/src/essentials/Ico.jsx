import React, { useEffect } from 'react'
import { ethers } from 'ethers';
import { useState } from 'react';
const Ico = ({sale}) => {
     const [address,setAddress] = useState("");
     const [amount, setAmount] = useState("");
     const [left, setLeft] = useState("");

      async function buy(){
        try{
        const contract = sale.saleContract;
        const bal = await contract.getContractTokenBal();
        console.log("hello",ethers.formatEther(bal));
        const  price= await contract.tokenPrice();
        const EthPay = await contract.multiply(ethers.parseEther(amount), price);
        const val = {value : EthPay }
        console.log(val);
        const buyTok = await contract.buytoken(address,ethers.parseEther(amount),val);
        }catch{
            console.log("something wrong with ico buytoken");
        }
      }
      
      async function tokenLefts(){
        try {
       
        const contract = sale.saleContract;
        const balen = await contract.getContractTokenBal();
        setLeft(Number(ethers.formatEther(balen)));
        
        }catch{
          console.log("something wrong")
        }
        
      }

      useEffect(()=>{
          sale && tokenLefts();
      },[sale])
      
  return (
     <div>

              <div className="border border-3 border-danger-subtle bg-gradient rounded position-absolute top-50 start-50 translate-middle" style={{ marginTop: '1400px', backgroundColor: '#D83F87', padding: '20px',width: '300px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',marginLeft:'500px' }}>

      <h1 style={{ color: 'whitesmoke', fontFamily: 'cursive', fontSize: '40px', fontWeight: 'bold', marginBottom: '20px', paddingLeft: '10px' }}>
        On Sale 
      </h1>

      <div className="d-flex justify-content-start">

        <div className="bg-gradient" style={{ backgroundColor: 'purple', padding: '10px', marginRight: '6px', borderRadius: '6px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
          <h2 style={{ color: 'whitesmoke', fontFamily: 'cursive', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>
          Token Price
          </h2>

          <div className="badge text-wrap" style={{ width: '6rem', alignContent: 'center', padding: '10px', margin: '10px auto', marginLeft: '5px', backgroundColor: '#D83F87' }}>
                0.1 Eth
          </div>
        </div>

        <div className="bg-gradient" style={{ backgroundColor: 'purple', padding: '10px', marginRight: '6px', borderRadius: '6px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
          <h2 style={{ color: 'whitesmoke', fontFamily: 'cursive', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>
            Token Left
          </h2>

          <div className="badge text-wrap" style={{ width: '6rem', alignContent: 'center', padding: '10px', margin: '10px auto', marginLeft: '5px', backgroundColor: '#D83F87' }}>
             {left ? <>{left}</> : '----'}
          </div>
        </div>
       </div>

         
        </div>
    <div>
            <div className="border border-3 border-danger-subtle bg-gradient rounded-4 position-absolute top-50 start-50 translate-middle" style={{ marginTop: '1400px', backgroundColor: '#D83F87', padding: '1px', width: '600px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)', textAlign: 'center' }}>

<h1 style={{ color: 'whitesmoke', fontFamily: 'cursive', fontSize: '40px', fontWeight: 'bold', marginBottom: '20px', paddingLeft: '10px' }}>
  Intial Coin Offering
</h1>

<div class="mb-3" style={{ margin: '30px' }}>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Address" onChange={(event) => setAddress(event.target.value)} />
</div>

<div class="mb-3" style={{ margin: '30px' }}>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Amount" onChange={(event) => setAmount(event.target.value)} />
</div>

<button type="button" className="btn rounded-pill" onClick={buy} style={{ color: 'whitesmoke', fontFamily: 'inherit', fontStretch: 'ultra-expanded', backgroundColor: 'purple', marginTop: '11px', marginBottom: '10px', marginLeft: '10px', paddingLeft: '40px', paddingRight: '40px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>buy</button>

</div>
    </div>
    </div>
  )
}

export default Ico