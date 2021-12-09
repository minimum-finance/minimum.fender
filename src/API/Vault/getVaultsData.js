import getVaultData from "./getVaultData";

const getVaultsData = async (vaults, provider) => {
  vaults.map((vault) => getVaultData(vault, provider));
  return vaults;
};

export default getVaultsData;
