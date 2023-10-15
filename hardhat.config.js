require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */
const url = process.env.RPC_URL_ALCHEMY;
const pkey = process.env.PRIVATE_KEY;
const api = process.env.ETHERSCAN_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: url,
      accounts: [pkey],
      chainId: 11155111,
    },
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: api,
  },
};
