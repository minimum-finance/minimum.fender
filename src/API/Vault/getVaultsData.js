import getVaultData from "./getVaultData";

const getVaultsData = async (vaults, provider) => {
  const vaultsData = await Promise.all(vaults.map(async (vault) => await getVaultData(vault, provider)));

  return vaultsData;
};

export default getVaultsData;
