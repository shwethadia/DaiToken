const Dai = artifacts.require("Dai");
const MyDefi = artifacts.require("MyDefi");


module.exports = async function(deployer,_network,accounts) {

  await deployer.deploy(Dai);
  const dai = await Dai.deployed();
  await deployer.deploy(MyDefi,dai.address);
  const mydefi = await MyDefi.deployed();
  await dai.faucet(mydefi.address,100)
  await mydefi._transfer(accounts[1],100);


  const balance0 = await dai.balanceOf(mydefi.address);
  const balance1 = await dai.balanceOf(accounts[1]);

  console.log(balance0.toString());
  console.log(balance1.toString());

};
