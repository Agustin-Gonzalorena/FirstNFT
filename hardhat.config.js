require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/CsqbQXpCdCpb51oxZhmzQSLJbcwQvqk_",
      accounts: [
        `0x1f4225744e5012729a7564e6e4130b5c6618ff3e4aa96894fe56564605d12d02`,
      ],
    },
  },
};
