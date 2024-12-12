const { Network, Alchemy } = require("alchemy-sdk");

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/iFaU63QE1NsCYGHmQLfv2GZymDaZCAqw",
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};