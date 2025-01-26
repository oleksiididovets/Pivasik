const { createWallet, sendTokens, getBalance } = require('./wallet');

console.log("Welcome to the Blockchain Wallet Simulator!");

(async () => {
    const myWallet = createWallet();
    console.log(`Your new wallet address: ${myWallet.address}`);

    console.log("Sending tokens...");
    await sendTokens(myWallet.address, "0xReceiverAddress123", 50);

    console.log(`Your balance: ${await getBalance(myWallet.address)} tokens`);
})();
