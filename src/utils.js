import { ethers } from 'ethers';

export const connectToWeb3 = async (callback) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    provider.getNetwork().then(network => {
        console.log("You are on: ", network);
        // Connect to metamask
        provider.send("eth_requestAccounts", []).then(res => {
            console.log("Connected...", res[0]);
            callback(res.length ? res[0] : '', provider, network);
        }).catch(err => {
            console.log("Something went wrong...", err);
            if (err.code === 4001) {
                // User rejected the app
                // TODO: popup
                console.log("User rejected connection");
            }
            callback('', provider);
        });
    });
};