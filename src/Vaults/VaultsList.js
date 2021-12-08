import React from 'react';

const VaultsList = ({ vaults }) => {

    return (
        <>
            <div>list</div>
            {vaults.map((vault) => <div>vault {vault}</div>)}
        </>
    );
}

export default VaultsList;
