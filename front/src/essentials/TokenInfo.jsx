import React, { useContext, useState } from 'react'
import { Erc20IcoContext } from './PodToken';
import { ethers } from 'ethers';
import { getTokenSaleContract } from './Constant';

export const TokInfo = React.createContext();

const TokenInfo = ({ children }) => {
  //Token info 
  const [totalSupply, setTotalSupply] = useState("");
  const [balOfOwner, setBalofOwner] = useState("");

  const { contract } = useContext(Erc20IcoContext);

  const Info = async () => {
    try {
      if (contract) {
        
        const supply = await contract.totalSupply();
        setTotalSupply(Number(ethers.formatEther(supply)));


        const owner = await contract.OwnerOfToken();
        
        const balanceOf = await contract.balanceOf(owner);
        setBalofOwner(Number(ethers.formatEther(balanceOf)));
      }
    } catch {
      console.log("something wrong in tokeninfo");
    }
  }

  return (
    <TokInfo.Provider value={{ Info, totalSupply, balOfOwner }}>
      {children}
    </TokInfo.Provider>
  )
}

export default TokenInfo