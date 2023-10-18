require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
require("./tasks/blockNumber");
require("hardhat-gas-reporter");
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */
const surl = process.env.RPC_URL_ALCHEMY || "https://eth-sepolia";
const pkey = process.env.PRIVATE_KEY || "0xkey";
const api = process.env.ETHERSCAN_API_KEY || "key";
const COINMARKETCAP_API = process.env.COINMARKETCAP_API || "key";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: surl,
      accounts: [pkey],
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      //accounts: Hardhat provides it
      chainId: 31337,
    },
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: api,
  },
  gasReporter: {
    enabled: true,
    noColors: true,
    outputFile: "gas-report.txt",
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API,

    //for polygon
    // token: "MATIC",
  },
};
