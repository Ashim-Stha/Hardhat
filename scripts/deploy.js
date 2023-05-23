const { ethers } = require("hardhat");

async function main() {
  const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

  console.log("Deploying contract....");
  const simpleStorage = await simpleStorageFactory.deploy();
  await simpleStorage.deployed();

  console.log(`Contract address is ${simpleStorage.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
