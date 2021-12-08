import { ethers } from 'ethers';
import VaultABI from '../../artifacts/contracts/Vaults/MinimumVault.sol/MinimumVault.json';

const getAcceptedTokens = async (vaultAddress, provider) => {
    const vault = new ethers.Contract(vaultAddress, VaultABI.abi, provider);
    return await vault.acceptedTokens();
};

export default getAcceptedTokens;