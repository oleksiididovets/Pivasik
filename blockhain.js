const chains = {
    Ethereum: { symbol: "ETH", name: "Ethereum" },
    Binance: { symbol: "BNB", name: "Binance Smart Chain" },
};

function connectToBlockchain(networkName) {
    if (!chains[networkName]) throw new Error("Unsupported blockchain network");
    console.log(`Connected to ${chains[networkName].name}`);
    return chains[networkName];
}

module.exports = { connectToBlockchain };
