import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { contractAddress, getAbi,getTokenSaleAbi,getTokenSaleContract } from './Constant';
import Web3Modal, { providers } from 'web3modal';
import { ethers } from 'ethers'
export const Erc20IcoContext = React.createContext();

const PodToken = ({ children }) => {
   //intances
   const [contract, setContract] = useState();
   const [account, setAccount] = useState("");
   const [saleContract, setSaleContract] = useState("");
   const getProvider = async (_contractAddress,_getAbi,_signer) => {
      return (new ethers.Contract(_contractAddress, _getAbi, _signer))
   }



   const connect = async () => {
      try {
         if (window.ethereum) {
            const web3 = new Web3Modal();
            const connects = await web3.connect();

            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          

            const prov = new ethers.BrowserProvider(connects);
            const signers = await prov.getSigner();
            const contracts = await getProvider(contractAddress,getAbi,signers);
            const saleContract = await getProvider(getTokenSaleContract,getTokenSaleAbi,signers);
            const balCon  = await prov.getBalance(getTokenSaleContract);
            console.log(saleContract);
            console.log(ethers.formatEther(balCon));
            setAccount(accounts[0]);
            setContract(contracts);
            setSaleContract(saleContract);
         }
         else {
            alert("install metamask")
         }
      } catch {
         console.log("metamask not connected");
         window.location.reload();
      }
   }


   return (
      <Erc20IcoContext.Provider value={{connect, contract,saleContract, account }}>
         {children}
      </Erc20IcoContext.Provider>
   )
}

export default PodToken