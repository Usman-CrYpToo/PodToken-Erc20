const hre = require('hardhat')

async function main() {
    const con = await hre.ethers.getContractFactory('Token');
    const deploy = await con.deploy(5000);
    console.log(deploy.address);

    const con2 = await hre.ethers.getContractFactory('TokenSale');
    const deploy2 = await con2.deploy(deploy.address,hre.ethers.utils.parseEther("0.1"));
    console.log(deploy2.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
