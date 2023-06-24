import React, { useEffect } from 'react';
import { Erc20IcoContext } from './essentials/PodToken';
import { useContext } from 'react';
import { Tok } from './essentials/TokenHolder';
import { TokInfo } from './essentials/TokenInfo';
import TransferToken from './essentials/TransferToken';
import Navbar from './essentials/components/Navbar';
import Homes from './essentials/components/Homes';
import Infobox from './essentials/components/Infobox';
import Holders from './essentials/components/Holders';
import Footer from './essentials/components/Footer';
import Ico from './essentials/Ico';
const App = () => {
  const { connect, contract, saleContract,account } = useContext(Erc20IcoContext);
  const { Holder, getUserInfo, balanceOf } = useContext(Tok);
  const { Info, totalSupply, balOfOwner } = useContext(TokInfo);

  useEffect(() => {
    contract && Holder();
    contract && Info();
  }, [contract]);

  useEffect(() => {
     const set = setInterval(() => {
        contract && Holder();
        contract && Info();
     }, 5000);
     return() =>{
       clearInterval(set);
     }
  },[contract]);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', async function () {
        connect();
      });
    }
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('chainChanged', function () {
        window.location.reload();
      });
    }
  }, []);

  return (
    <div style={{ background: 'purple', minHeight: 'auto', margin: 0, padding: 1 }}>
      <div className="bg-gradient" style={{ minHeight: 'auto', maxHeight: 'auto' }}>
        <Navbar contract={{ connect, account, balanceOf }} />
        <Homes />
        <Infobox inform={{ balOfOwner, totalSupply }} />
        <TransferToken />
        <Holders user={{getUserInfo}}/>
        <Footer/>
        <Ico sale = {{saleContract}}/>
      </div>
    </div>
  );
};

export default App;
