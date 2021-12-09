import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVaultsData } from "../API/Vault";
import { setVaults } from "../Redux/Actions/vaultActions";
import VaultData from "../Data/VaultData.json";

const VaultsList = () => {
  const dispatch = useDispatch();
  const vaults = useSelector((state) => state.vaultsData.vaults);
  const provider = useSelector((state) => state.web3Data.provider);

  const fetchVaults = async () => {
    const vaultData = await getVaultsData(VaultData.vaults, provider);
    dispatch(setVaults(vaultData));
  }

  useEffect(
    () => {
      if (provider) {
        fetchVaults();
      }
    },
    [provider]
  );

  return (
    <>
      <div>list</div>
      {vaults.map((vault, i) => (
        <div>vault {i}</div>
      ))}
    </>
  );
};

export default VaultsList;
