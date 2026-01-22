const hre = require("hardhat");

async function main() {
  const CrowdDAO = await hre.ethers.getContractFactory("CrowdDAO");
  const crowdDAO = await CrowdDAO.deploy();

  await crowdDAO.deployed();

  console.log(`CrowdDAO deployed to: ${crowdDAO.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
