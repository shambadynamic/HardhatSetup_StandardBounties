require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("./tasks");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [{
                version: "0.8.7"
            }
        ]
    },
    defaultNetwork: "mumbai",
    networks: {
        // polygon: {
        //     url: process.env.ALCHEMY_POLYGON_MAINNET_URL,
        //     accounts: [process.env.MAINNET_ACCOUNT_PRIVATE_KEY],
        //     chainId: 137,
        // },
        mumbai: {
            url: process.env.ALCHEMY_POLYGON_URL,
            accounts: [process.env.ACCOUNT_PRIVATE_KEY],
            chainId: 80001,
        },
        goerli: {
            url: process.env.ALCHEMY_GOERLI_URL,
            accounts: [process.env.ACCOUNT_PRIVATE_KEY],
            chainId: 5,
        }
    },

    etherscan: {
        apiKey: process.env.POLYGONSCAN_API_KEY    
    }
    
 
};