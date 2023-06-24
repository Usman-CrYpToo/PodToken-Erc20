import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { Erc20IcoContext } from './PodToken';
import { ethers } from 'ethers';

export const Tok = React.createContext();

const TokenHolder = ({ children }) => {
  //holder info ;
  const [getUserInfo, setUserInfo] = useState([]);
  const [balanceOf, setBalanceOf] = useState("");


  const { contract, account } = useContext(Erc20IcoContext);
  const hell = "hello from holder";

  const Holder = async () => {
    try {
      if (contract) {

        const getUserInfo = await contract.getInfo();
        setUserInfo(getUserInfo);
   

        const balOf = await contract.balanceOf(account);
        setBalanceOf(Number(ethers.formatEther(balOf)));
       
      }
    } catch {
      console.log("something wrong in tokenHolder");
    }
  }


  return (

    <Tok.Provider value={{ Holder, getUserInfo, balanceOf }}>
      {children}
    </Tok.Provider>
  )

}

export default TokenHolder