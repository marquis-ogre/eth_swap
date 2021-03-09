require('babel-register');
require('babel-polyfill');
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = 'clap reject galaxy harsh kitten lecture original speed reflect must fork vessel';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: () => new HDWalletProvider(
        mnemonic,
        "https://ropsten.infura.io/v3/64317c58570d44889bdbb7271d9468ac"
      ),
      network_id: 3,
      gas: 5000000,
      gasPrice: 25000000000,
    },
    rinkeby: {
      provider: () => new HDWalletProvider(
        mnemonic,
        "https://rinkeby.infura.io/v3/64317c58570d44889bdbb7271d9468ac"
      ),
      network_id: 4,
      gas: 5000000,
      gasPrice: 25000000000,
    },
    kovan: {
      provider: () => new HDWalletProvider(
        mnemonic,
        "https://kovan.infura.io/v3/64317c58570d44889bdbb7271d9468ac"
      ),
      network_id: 42,
      gas: 5000000,
      gasPrice: 25000000000,
    },
    main: {
      provider: () => new HDWalletProvider(
        mnemonic,
        "https://mainnet.infura.io/v3/64317c58570d44889bdbb7271d9468ac",
      ),
      network_id: 5,
      gas: 5000000,
      gasPrice: 25000000000,
    },
  },

  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: "D7USTYGTZY8IESDS73KCQ6IKFBZR6PFUUC"
  },

  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}


