const ethers = require("ethers");
const { goerli, mainnet } = require("../secret/keepmesecret");

const provider = new ethers.providers.JsonRpcProvider(mainnet);

console.log(provider);
