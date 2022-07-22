require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/qTsVlFWImIv-bbE3U2zL9lfG8ukSebWb',
      accounts: ['091c1de787b2c6f26b6855d4acfa7cd56f84af2d47b18061d9d44ac9c0e18f25'],
    },
  },
};
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

