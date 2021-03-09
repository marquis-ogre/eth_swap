const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function(deployer) {
  // Deploy Token
  await deployer.deploy(Token);
  const token = await Token.deployed()

  // Deploy EthSwap
  await deployer.deploy(EthSwap, token.address);
  const ethSwap = await EthSwap.deployed()

  // Transfer tokens to EthSwap (10 million)
  await token.transfer(ethSwap.address, '10000000000000000000000000')

  // Transfer the dev shares
  await token.transfer('0xCA0477Fbeae2c094515649cAC043081d75C449e0', '5000000000000000000000000');

  // Transfer the marketing shares
  await token.transfer('0xF6b44e60B0aF47f56e3c7C6A159f8673315aBb66', '5000000000000000000000000');
};


