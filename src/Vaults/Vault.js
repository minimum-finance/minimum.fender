import React from "react";
import { Collapse } from "antd";
import VaultDetails from "./VaultDetails";

const { Panel } = Collapse;

const Vault = ({ address, name, symbol }) => {
  return (
    <Collapse>
      <Panel header={<VaultDetails />} showArrow={false} key="1">
        <p>{name}</p>
      </Panel>
    </Collapse>
  );
};

export default Vault;
