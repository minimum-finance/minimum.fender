import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVaultsData } from "../API/Vault";
import { setVaults } from "../Redux/Actions/vaultActions";
import VaultData from "../Data/VaultData.json";

const VaultsList = () => {
  const dispatch = useDispatch();
  const vaults = useSelector((state) => state.vaultsData.vaults);

  const fetchVaults = async () => {
    //const vaultData = await getVaultsData(VaultData.vaults);

    //dispatch(setVaults(vaultData));
  }

  useEffect(
    () => {
      fetchVaults();
    },
    []
  );

  console.log(vaults);

  return (
    <>
      <div>list</div>
      {vaults.map((vault) => (
        <div>vault {vault}</div>
      ))}
    </>
  );
};

export default VaultsList;
