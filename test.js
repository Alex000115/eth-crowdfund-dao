const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CrowdDAO", function () {
  it("Should launch a campaign successfully", async function () {
    const [owner] = await ethers.getSigners();
    const CrowdDAO = await ethers.getContractFactory("CrowdDAO");
    const dao = await CrowdDAO.deploy();

    const currentBlock = await ethers.provider.getBlock("latest");
    const start = currentBlock.timestamp + 100;
    const end = start + 3600;

    await expect(dao.launch(ethers.utils.parseEther("1"), start, end))
      .to.emit(dao, "Launch")
      .withArgs(1, owner.address, ethers.utils.parseEther("1"), start, end);
  });
});
