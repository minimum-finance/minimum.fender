import { ethers } from "ethers";
import VaultABI from "../../artifacts/contracts/Vaults/MinimumVault.sol/MinimumVault.json";

const getVaultData = async (vaultAddress, provider) => {
  const vault = new ethers.Contract(vaultAddress, VaultABI.abi, provider);
  const name = await vault.name();
  const symbol = await vault.symbol();
  const want = await vault.want();
  const balance = await vault.balance();
  const available = await vault.available();
  const strat = await vault.strategy();

  return {
    name: name,
    symbol: symbol,
    want: want,
    balance: balance,
    available: available,
    strat: strat,
  };
};

export default getVaultData;
