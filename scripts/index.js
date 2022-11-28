// Written by gooltoe

const { ethers } = require("ethers");

const RPC_ENDPOINT = "";
const provider = new ethers.providers.JsonRpcProvider(RPC_ENDPOINT);

const processTransaction = async (transactions) => {
  // Go through each transaction and filter out what you need!
  transactions.forEach((transaction) => {
    console.log(transaction);
  });
};

const processBlock = async () => {
  // Fire once per new block!
  provider.on("block", async (blockNumber) => {
    const blockInfo = await provider.getBlockWithTransactions(blockNumber);
    const transactions = blockInfo.transactions;
    processTransaction(transactions);
  });
};

processBlock();
