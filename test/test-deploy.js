const { assert, expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
  let SimpleStorageFactory, simpleStorage;
  beforeEach(async function () {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorageFactory.deploy();
  });

  it("Should start with a fav num 0", async function () {
    const currentVal = await simpleStorage.retrieve();
    const expectedVal = "0";

    assert.equal(currentVal.toString(), expectedVal);
    // expect(currentVal.toString()).to.equal(expectedVal);
  });

  it("Should update when we call store", async function () {
    const expectedVal = "7";
    const transactionResponse = await simpleStorage.store(expectedVal);
    await transactionResponse.wait(1);

    const updatedVal = await simpleStorage.retrieve();
    assert(updatedVal.toString(), expectedVal);
  });

  //to run specific test only
  // it.only("Should update when we call store", async function () {
  //   const expectedVal = "7";
  //   const transactionResponse = await simpleStorage.store(expectedVal);
  //   await transactionResponse.wait(1);

  //   const updatedVal = await simpleStorage.retrieve();
  //   assert(updatedVal.toString(), expectedVal);
  // });
});
