task("deployTxRelayer", "Deploy BountiesMetaTxRelayer contract")
    .addPositionalParam("name", "The name of the contract that you want to deploy")
    .addPositionalParam("address", "The address of the StandardBounties contract")
    .setAction(async(taskArgs) => {
        const contractName = taskArgs.name

        const contractAddress = taskArgs.address

        const networkName = network.name

        console.log(contractName)

        console.log(`Deploying ${contractName} to ${networkName} network`)

        const txRelayerContractFactory = await ethers.getContractFactory(contractName)

        const txRelayerContract = await txRelayerContractFactory.deploy(contractAddress);

        await txRelayerContract.deployed();

        console.log(`${contractName} deployed to ${txRelayerContract.address} on ${networkName} network.`)

    })

module.exports = {}