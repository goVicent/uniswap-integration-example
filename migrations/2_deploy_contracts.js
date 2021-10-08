var LiquidityExamples = artifacts.require("./LiquidityExamples.sol");

module.exports = function(deployer) {
  deployer.deploy(LiquidityExamples,"0xC36442b4a4522E871399CD717aBDD847Ab11FE88");
};
