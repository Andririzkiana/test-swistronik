require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", //URL of the RPC node for Swisstronik.
      accounts: ["07a5f5b9e6418c55e0f3da9de4f7f784c5dd1daa931b2fd9f413f8371b94e5a3"], //Your private key starting with "0x" 
      //Make sure you have enough funds in this wallet to deploy the smart contract
    },
  },
};