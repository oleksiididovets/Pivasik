const crypto = require('crypto');

const wallets = {};
const balances = {};

function createWallet() {
    const address = `0x${crypto.randomBytes(20).toString('hex')}`;
    wallets[address] = { privateKey: crypto.randomBytes(32).toString('hex') };
    balances[address] = 100; // Initialize with 100 tokens
    console.log(`Wallet created: ${address}`);
    return { address, ...wallets[address] };
}

async function sendTokens(from, to, amount) {
    if (!wallets[from]) throw new Error("Sender wallet not found");
    if (!balances[from] || balances[from] < amount) throw new Error("Insufficient funds");
    if (!wallets[to]) throw new Error("Receiver wallet not found");

    balances[from] -= amount;
    balances[to] = (balances[to] || 0) + amount;
    console.log(`Sent ${amount} tokens from ${from} to ${to}`);
}

async function getBalance(address) {
    if (!wallets[address]) throw new Error("Wallet not found");
    return balances[address] || 0;
}

module.exports = { createWallet, sendTokens, getBalance };
