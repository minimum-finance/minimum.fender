import getVaultData from "./getVaultData";

const getVaultsData = async (vaults) => {
  vaults.map(getVaultData);
  return vaults;
};

export default getVaultsData;
