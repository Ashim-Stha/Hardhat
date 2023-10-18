const { ethers, run, network } = require("hardhat");
//run allows to run any hardhat tasks
//network to see network ie testnet or EVM or mainnet

require("dotenv").config();

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

  console.log("Deploying...");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.waitForDeployment();
  const addr = await simpleStorage.getAddress();
  console.log(addr);
  // console.log(network.config);

  if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
    await simpleStorage.deploymentTransaction().wait(6);
    await verify(addr, []);
  }

  const currentFavNum = await simpleStorage.retrieve();
  console.log(currentFavNum.toString());

  const transactionResponse = await simpleStorage.store(7);
  await transactionResponse.wait(1);

  const updatedNum = await simpleStorage.retrieve();
  console.log(updatedNum.toString());

  async function verify(contractAddress, args) {
    //args is present only if constuctor is present in contract
    console.log("Verifying contract...");
    try {
      await run("verify:verify", {
        address: contractAddress,
        constructorArguments: args,
      });
    } catch (err) {
      if (err.message.toLowerCase().includes("already verified")) {
        console.log("Already verified");
      } else {
        console.log(err);
      }
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
