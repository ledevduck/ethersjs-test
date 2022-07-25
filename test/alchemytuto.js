const ethers = require("ethers");
const { alchemyHttps } = require("../secret/keepmesecret");

const provider = new ethers.providers.JsonRpcProvider(alchemyHttps);

console.log(alchemyHttps);
