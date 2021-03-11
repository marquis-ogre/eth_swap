#!/usr/bin/env bash

# Deploy contracts
truffle migrate --reset --network rinkeby

# Verify Contracts on Etherscan
truffle run verify Token --network rinkeby --license SPDX-License-Identifier
truffle run verify EthSwap --network rinkeby --license SPDX-License-Identifier

# Flatten Contracts
/home/marquisogre/.nvm/versions/node/v9.10.0/bin/truffle-flattener src/contracts/Token.sol > src/flats/Token_flat.sol
/home/marquisogre/.nvm/versions/node/v9.10.0/bin/truffle-flattener src/contracts/EthSwap.sol > src/flats/EthSwap_flat.sol



