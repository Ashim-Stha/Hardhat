const { ethers } = require("hardhat");

async function main() {
  const contractFactory = await ethers.getContractFactory("SimpleStorage");

  console.log("Deploying...");
  const contract = await contractFactory.deploy();
  const address = await contract.getAddress();

  console.log(address);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
