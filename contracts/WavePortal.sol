// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
uint256 totalWaves;
string favColor;
    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function wave () public{
      totalWaves++;
      console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns(uint256){

      console.log("Total waves is now %d !", totalWaves);
      return totalWaves;
    }

    function tellFavoriteColor(string memory color) public{
      favColor = color;
      console.log("You chose color %s", color);
     
    }
    function getFavoriteColor() public view returns(string memory){
      
      console.log("%s favorite color is %s", msg.sender,favColor);
      return favColor;
     
    }
}