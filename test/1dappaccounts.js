// Accounts

const ethers = require("ethers");
const { goerli, mainnet } = require("../secret/secret");

const provider = new ethers.providers.JsonRpcProvider(mainnet);

const address = "0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e";

const main = async () => {
  const balance = await provider.getBalance(address);
  console.log(
    `\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`
  );
};

main();
