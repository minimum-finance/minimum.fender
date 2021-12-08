import React from "react";
import { useSelector } from "react-redux";

const VaultsList = () => {

  const vaults = useSelector((state) => state.vaultsData.vaults);

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
