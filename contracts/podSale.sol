// SPDX-License-Identifier: MIT
pragma solidity >= 0.7.0;

import "./pods.sol";

contract TokenSale{
    address admin;
    Token public tokenContract ;
    uint256 public tokenPrice;
    uint256 public tokenSold;
    
    event sell(address buyer, uint256 amount);

    constructor(Token _tokenContract,uint256 _tokenPrice){
         tokenContract = _tokenContract;
         tokenPrice = _tokenPrice ;
         admin = msg.sender;
    }
    
    function multiply(uint256 x, uint256 y) public pure returns(uint256){
        uint256 z;
         require(y == 0 || (z = x * y / y) == x);
         return (z * y) / (1 * (10 ** 18));
    }

    function buytoken(address _buyer, uint256 _amount) public payable returns(bool){
         require(msg.value == multiply(_amount,tokenPrice),"incorrect tokenAmount or Ether send");
         require(tokenContract.balanceOf(address(this)) >= _amount,"insuffiecent amount in the Contract Address");
         require(tokenContract.transfer(_buyer, _amount),"something wrong while transfering tokens");
         tokenSold+= _amount;
         emit sell(_buyer, _amount);
         return true;
    }

    function getContractTokenBal() public view returns(uint256){
      return(tokenContract.balanceOf(address(this)));
    }
     
     function endSale() public payable{
           require(msg.sender == admin);
           require(tokenContract.transfer(admin, tokenContract.balanceOf(address(this))));
           payable(admin).transfer(address(this).balance);
     }
}